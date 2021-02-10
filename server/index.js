// server port
const port = 3000

const bcrypt = require("bcrypt");

// express server
const express = require('express')
const app = express()

// add body-parser to express
const bodyParser = require('body-parser')
// register as middleware
app.use( bodyParser.json() )

// add cookie-parser to express
const cookieParser = require('cookie-parser')
// register as middleware
app.use(cookieParser())

// add express-session to express
const session = require('express-session')
// register as middleware
app.use( session( {
    secret: 'keyboard cat boddyfollymeskaweq456',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // ändra till true för secure cookie (felsöka behövs här nu)
} ) )

const mysql = require('mysql');
const db = mysql.createConnection({
    host     : 'den1.mysql4.gear.host',
    user     : 'ljudio1',
    password : 'Qw4QD52K_r2-',
    database : 'ljudio1'
});

// vi gör om mysql-metoderna connect och query till promise-metoder så att vi kan använda async/await för att vänta på databasen
const util = require('util')
db.connect = util.promisify(db.connect)
db.query = util.promisify(db.query)

// load apis / endpoints

app.get('/api/users', async (request, response) => {
    let data = await db.query('SELECT * FROM users');
    response.json(data);
})

app.get('api/playlists', async (request, response) => {
    let data = await db.query('SELECT * from playlists');
    response.json(data);
})

app.get("/api/playlists/:id", async (request, response) => {
    let data = await db.query("SELECT * FROM playlists WHERE id = ?", [request.params.id])
    data = data[0] // single row
    response.json(data)
})

app.post('/api/login', async (request, response) => {
    let user = await db.query('SELECT * FROM users WHERE username = ?', [request.body.username])
    user = user[0]

    if(user && user.username && await bcrypt.compare(request.body.password, user.password)){
        request.session.user = user
        user.loggedin = true
        response.json({loggedin: true})
    }else{
        response.status(401) // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        response.json({message:"no matching user"})
    }
})

app.post('/api/users', async (request, response) => {
    
    try {
        let password = await bcrypt.hash(request.body.password, 10);
        let result = await db.query("INSERT INTO users SET ?", {...request.body, password})
        response.json(result)
    }
    catch (e) {
        
    }
    
});

// authentication: get logged in user
app.get('/api/login', async (request, response) => {
    let user
    if(request.session.user){
        user = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [request.session.user.username, request.session.user.password])
        user = user[0]
    }
    if(user && user.username){
        user.loggedin = true
        delete(user.password)
        response.json(user)
    }else{
        response.status(401) // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        response.json({message:"not logged in"})
    }
})

// start the server
app.listen(3000, async () => {
    await db.connect()
    console.log('server running on port 3000')
})