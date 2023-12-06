const { Schema, model } = require('mongoose');


const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    allergies: [String],
    prescriptions: [String],
});

const Patient = model('Patient', patientSchema);

module.exports = Patient;