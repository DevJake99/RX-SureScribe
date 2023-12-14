const { Schema, model } = require('mongoose')
const prescriptionSchema = new Schema({
  medication: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  refills: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});
const Prescription = model('prescription', prescriptionSchema)

module.exports = Prescription;