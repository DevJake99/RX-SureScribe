const { Schema, model } = require('mongoose');

const prescriptionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    interactionCode: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    }
});
const Prescription = model('prescription', prescriptionSchema)

module.exports = Prescription;