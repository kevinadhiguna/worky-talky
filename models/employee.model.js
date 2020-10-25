const mongoose = require('mongoose')

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'May we know your name 😆 ?',
    },
    email: {
        type: String,
    },
    mobile: {
        type: String,
    },
    city: {
        type: String,
    },
})

// Email Address Validation
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(val)
}, 'Oops.. please put a valid e-mail address 📧 !')

mongoose.model('Employee', employeeSchema)
