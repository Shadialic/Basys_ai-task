import AuthorizationRequest from "../models/AuthorizationRequest.js";

const createAuthorizationRequest = async (req, res) => {
  try {
    const {
      patientId,
      insurancePlan,
      treatmentType,
      diagnosisCode,
      doctorNotes,
      dateOfService
    } = req.body;
    const newRequest = new AuthorizationRequest({
      insurancePlan,
      treatmentType,
      diagnosisCode,
      doctorNotes,
      dateOfService,
      patientId,
    });
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAuthorizationRequests = async (req, res) => {
  try {
    const {id}=req.params
    const requests = await AuthorizationRequest.findById({patientId:id}).populate("patientId");
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAuthorizationRequests, createAuthorizationRequest };
