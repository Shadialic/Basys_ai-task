
import mongoose from "mongoose";

const authorizationRequestSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    treatmentType: { type: String, required: true },
    insurancePlan: String,
    dateOfService: String,
    diagnosisCode: String,
    status: { type: String, enum: ['pending', 'approved', 'denied'], default: 'pending' },
    doctorNotes: String,
  }, { timestamps: true });
  
  const AuthorizationRequest = mongoose.model('AuthorizationRequest', authorizationRequestSchema);
  export default AuthorizationRequest;