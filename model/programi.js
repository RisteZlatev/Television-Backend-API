const mongoose = require('mongoose');

const programiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    time:{
        type: Date,
        required: true,
    },
    genre: {
        type: String,
        enum: ['cartoon', 'turkish drama', 'news', 'sport'],
    },
});

const Programi = mongoose.model("Programi", programiSchema);
module.exports = Programi;