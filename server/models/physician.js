const { Schema, model } = require('mongoose');
const Patient = require('./Patient')

const physicianSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    patients: [Patient.schema],
});

const Physician = model('Physician', physicianSchema);

module.exports = Physician;
