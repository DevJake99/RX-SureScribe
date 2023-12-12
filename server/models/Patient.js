const { Schema, model } = require('mongoose');
const Prescription = require('./prescription');

const patientSchema = new Schema({
    physician: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    pharmacy:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    allergies: [
        String
        /* {
             type: Schema.Types.String,
         } */
    ],
    prescriptions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Prescription'
        }
    ],
});

const Patient = model('Patient', patientSchema);

module.exports = Patient;