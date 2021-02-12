let express = require('express')
const app = express()

// läser in modulen body-parser
const bodyParser = require('body-parser')
// registrerar den som middleware
app.use( bodyParser.json() )

// läser in modulen...
let cookieParser = require('cookie-parser')
// registrerar den som middleware
app.use(cookieParser())

// läser in module...
let session = require('express-session')
// registrerar den som middleware
app.use( session( {
    secret: 'keyboard cat jksfj<khsdka',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // ändra till true för secure cookie (felsöka behövs här nu)
} ) )

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'den1.mysql4.gear.host',
    user: 'ljudio1',
    password: 'Qw4QD52K_r2-',
    database: 'ljudio1'
});

// vi gör om mysql-metoderna connect och query till promise-metoder så att vi kan använda async/await för att vänta på databasen
const util = require('util')
db.connect = util.promisify(db.connect)
db.query = util.promisify(db.query)

require('./yt-rest-endpoints.js')(app, db)
require('./data-rest-endpoints')(app, db)

// start the server
app.listen(3000, async () => {
    await db.connect()
    console.log('server running on port 3000')
})