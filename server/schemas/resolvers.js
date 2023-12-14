const { AuthenticationError } = require('apollo-server-express');
const { User, Patient, Prescription, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    currentUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('patients');
      }
      throw AuthenticationError;
    },
    users: async () => {
      return User.find().populate('patients');
    },
    prescriptions: async () => {
      try {
        return await Prescription.find({})
      } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch prescriptions')
      }
    },
    prescriptionByCategory: async (parent, args, context) => {
      const prescriptionList = await Prescription.find({ category: args.category })
      if (prescriptionList.length === 0) {
        throw new Error('No prescriptions found in this category')
      } else if (error) {
        console.log(error);
      }
      return prescriptionList;
    },
    pharmacyByCity: async (parent, args, context) => {
      const pharmacyList = await User.find({ userType: 'Pharmacy', city: args.city });
      if (pharmacyList === 0) {
        throw new Error('Could not find Pharmacy in this city')
      } else if (error) {
        console.log(error);
      }
      return pharmacyList
    },
    patientLookUp: async (parent, args, context) => {
      const patientList = await Patient.find({ firstName: args.firstName, lastName: args.lastName });
      if (patientList === 0) {
        throw new Error(`No patients with name of ${args.firstName} ${args.lastName}`)
      } else if (error) {
        console.log(error);
      }
      return patientList;
    }
  },

  Mutation: {
    addUser: async (parent, { userType, firstName, lastName, email, password, streetAddress, city, state, zip }) => {
      const user = await User.create({ userType, firstName, lastName, email, password, streetAddress, city, state, zip });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    addPatient: async (parent, args, context) => {
      if (!context.user || !context.user._id) {
        throw new Error('Authentication Error')
      }
      const physician = await User.findById(context.user._id)
      if (physician && physician.userType === 'Physician') {
        const patient = await Patient.create({
          firstName: args.firstName,
          lastName: args.lastName,
          dob: args.dob,
          allergies: args.allergies,
          physician: physician._id,
          prescriptions: args.prescriptions
        });
        await User.findByIdAndUpdate(physician._id, { $push: { patients: patient._id } });
        return patient;
      }
    },
    addPrescription: async (parent, args , context) => {
      if (context.user) {
        const prescription = await Prescription.create({ ...args });
        return prescription;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
