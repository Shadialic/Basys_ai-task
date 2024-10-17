import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getPatientById } from "../services/api";
import { ArrowLeft } from "lucide-react";

export default function PatientDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [requests, setRequests] = useState([]);

  const id = location.state;

  useEffect(() => {
    fetchPatient();
  }, [id]);

  const fetchPatient = async () => {
    const data = await getPatientById(id);
    setRequests(data.request);
    setPatient(data.patient);
  };

  if (!patient) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        <span className="text-lg font-semibold">Back to Patient List</span>
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-black">
          <h1 className="text-3xl font-bold text-white">
            {patient.personal_information.full_name}
          </h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Patient Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Personal Information
              </h3>
              <p className="text-gray-900">
                Date of Birth: {patient.personal_information.date_of_birth}
              </p>
              <p className="text-gray-900">
                Gender: {patient.personal_information.gender}
              </p>
              <p className="text-gray-900">
                Phone:{" "}
                {patient.personal_information.contact_details.phone_number}
              </p>
              <p className="text-gray-900">
                Email:{" "}
                {patient.personal_information.contact_details.email_address}
              </p>
              <p className="text-gray-900">
                Address: {patient.personal_information.home_address}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Emergency Contact
              </h3>
              <p className="text-gray-900">
                Name:{" "}
                {
                  patient.personal_information.emergency_contact_information
                    .name
                }
              </p>
              <p className="text-gray-900">
                Phone:{" "}
                {
                  patient.personal_information.emergency_contact_information
                    .phone_number
                }
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Medical History
              </h3>
              <p className="text-gray-900">
                Previous Conditions:{" "}
                {patient.medical_history.previous_conditions.join(", ")}
              </p>
              <p className="text-gray-900">
                Allergies: {patient.medical_history.allergies.join(", ")}
              </p>
              <p className="text-gray-900">
                Chronic Illnesses:{" "}
                {patient.medical_history.chronic_illnesses.join(", ")}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Current Medications
              </h3>
              <ul className="list-disc pl-5">
                {patient.medical_history.current_medications.map(
                  (med, index) => (
                    <li key={index} className="text-gray-900">
                      {med.name} - {med.dosage}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Current Health Information
              </h3>
              <p className="text-gray-900">
                Reason for Visit:{" "}
                {patient.current_health_information.reason_for_visit}
              </p>
              <h4 className="text-md font-medium text-gray-700 mt-2">
                Vital Signs:
              </h4>
              <p className="text-gray-900">
                Heart Rate:{" "}
                {patient.current_health_information.vital_signs.heart_rate}
              </p>
              <p className="text-gray-900">
                Blood Pressure:{" "}
                {patient.current_health_information.vital_signs.blood_pressure}
              </p>
              <p className="text-gray-900">
                Temperature:{" "}
                {patient.current_health_information.vital_signs.temperature}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Diagnostic Tests
              </h3>
              <ul className="list-disc pl-5">
                {patient.current_health_information.diagnostic_tests.map(
                  (test, index) => (
                    <li key={index} className="text-gray-900">
                      {test.test_name}: {test.results}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Insurance Information
              </h3>
              <p className="text-gray-900">
                Provider:{" "}
                {
                  patient.insurance_and_financial_information.insurance_details
                    .provider
                }
              </p>
              <p className="text-gray-900">
                Policy Number:{" "}
                {
                  patient.insurance_and_financial_information.insurance_details
                    .policy_number
                }
              </p>
              <p className="text-gray-900">
                Insurance ID:{" "}
                {
                  patient.personal_information.identification_documents
                    .insurance_id
                }
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Consent Forms
              </h3>
              <p className="text-gray-900">
                HIPAA Signed:{" "}
                {patient.consent_forms_and_legal_documents.hipaa_forms.signed
                  ? "Yes"
                  : "No"}
              </p>
              <p className="text-gray-900">
                Date Signed:{" "}
                {new Date(
                  patient.consent_forms_and_legal_documents.hipaa_forms.date_signed
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Authorization Requests
        </h2>
        {requests.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Treatment Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Diagnosis Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requests.map((item, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.treatmentType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.diagnosisCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 bg-white p-4 rounded-lg shadow">
            No requests available.
          </p>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate(`/authorization/`, { state: patient._id })}
          className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-black transition-colors duration-200 transform hover:scale-105"
        >
          Submit Authorization Request
        </button>
      </div>
    </div>
  );
}
