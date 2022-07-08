const mongoose = require('mongoose');

const clientsSchemas = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    }
})

module.exports = mongoose.model('Clients', clientsSchemas);