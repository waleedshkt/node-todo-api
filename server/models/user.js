const mongoose = require('mongoose');

var User = mongoose.model('USer', {
    name: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};