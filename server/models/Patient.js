import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  personal_information: {
    full_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    gender: { type: String, required: true },
    contact_details: {
      phone_number: { type: String, required: true },
      email_address: { type: String, required: true },
    },
    home_address: { type: String, required: true },
    emergency_contact_information: {
      name: { type: String, required: true },
      phone_number: { type: String, required: true },
    },
    identification_documents: {
      insurance_id: { type: String, required: true },
    },
  },
  medical_history: {
    previous_conditions: [{ type: String }],
    allergies: [{ type: String }],
    current_medications: [{
      name: { type: String, required: true },
      dosage: { type: String, required: true }
    }],
    chronic_illnesses: [{ type: String }],
  },
  current_health_information: {
    reason_for_visit: { type: String, required: true },
    vital_signs: {
      heart_rate: { type: String, required: true },
      blood_pressure: { type: String, required: true },
      temperature: { type: String, required: true },
    },
    diagnostic_tests: [{
      test_name: { type: String, required: true },
      results: { type: String, required: true },
    }]
  },
  insurance_and_financial_information: {
    insurance_details: {
      provider: { type: String, required: true },
      policy_number: { type: String, required: true },
    },
  },
  consent_forms_and_legal_documents: {
    hipaa_forms: {
      signed: { type: Boolean, required: true },
      date_signed: { type: Date, required: true },
    },
  },
});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
