const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be at least 3 characters!"], minLength: 3},
    }, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
