const { Schema, model } = require('mongoose');

const pharmacistSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    streetAdress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
    },
});

const Pharmacist = model('Pharmacist', pharmacistSchema);

module.exports = Pharmacist;