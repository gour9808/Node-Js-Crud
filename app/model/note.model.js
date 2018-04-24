const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    _id: String,
    email: String,
    first: String,
    last: String,
    phone: String
}, {
        timestamps: true
    });



module.exports = mongoose.model('Note', NoteSchema);