import AuthorizationRequest from "../models/AuthorizationRequest.js";
import Patient from "../models/Patient.js";

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    const request = await AuthorizationRequest.find({ patientId: id });
    res.json({ patient,request });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export {getPatients,getPatientById}