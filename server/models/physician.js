const { Schema, model } = require('mongoose');
const Patient = require('./Patient')

const physicianSchema = new Schema({
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
        type: String,
    },
    patients: [Patient.schema],
});

const Physician = model('Physician', physicianSchema);

module.exports = Physician;
