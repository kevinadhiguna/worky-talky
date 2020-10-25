require('./models/db')

const express = require('express')
const path = require('path')

const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')

const bodyParser = require('body-parser')

const {
    allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access')

const employeeController = require('./controllers/employeeController')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', path.join(__dirname, '/views'))
app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
        defaultLayout: 'mainLayout',
        layoutsDir: __dirname + '/views/layouts',
        handlebars: allowInsecurePrototypeAccess(Handlebars),
    })
)
app.set('view engine', 'hbs')

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('🚀 Server is running at port ' + PORT)
})

app.use('/employee', employeeController)
