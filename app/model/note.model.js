const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    _id: String,
    title: String,
    content: String,
    email: String
}, {
    timestamps: true
});



module.exports = mongoose.model('Note', NoteSchema);