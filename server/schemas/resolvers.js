const { error } = require('console');
const { User, Patient, Prescription } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
//Template 

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
      //console.log('Login:', context)
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
      const physician = await User.findById(context.user._id) // get physicianID from token
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





    }
  }

}

module.exports = resolvers;
