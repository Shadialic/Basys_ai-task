import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createAuthorizationRequest } from "../services/api";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  treatmentType: Yup.string().required("Treatment type is required"),
  insurancePlan: Yup.string().required("Insurance plan is required"),
  dateOfService: Yup.date().required("Date of service is required"),
  diagnosisCode: Yup.string().required("Diagnosis code is required"),
  doctorNotes: Yup.string().required("Doctor's notes are required"),
});

export default function AuthorizationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.state;
  const initialValues = {
    patientId,
    treatmentType: "",
    insurancePlan: "",
    dateOfService: "",
    diagnosisCode: "",
    doctorNotes: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await createAuthorizationRequest(values);
      toast.success("Authorization request submitted successfully!");
      navigate(`/patient/`, { state: patientId });
    } catch (error) {
      console.error("Error submitting authorization request:", error);
      toast.error("Failed to submit authorization request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
              Authorization Request
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Submit New Request
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="treatmentType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Treatment Type
                    </label>
                    <Field
                      type="text"
                      name="treatmentType"
                      id="treatmentType"
                      className={`p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.treatmentType && touched.treatmentType
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="treatmentType"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="insurancePlan"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Insurance Plan
                    </label>
                    <Field
                      type="text"
                      name="insurancePlan"
                      id="insurancePlan"
                      className={`p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.insurancePlan && touched.insurancePlan
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="insurancePlan"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dateOfService"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date of Service
                    </label>
                    <Field
                      type="date"
                      name="dateOfService"
                      id="dateOfService"
                      className={`p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.dateOfService && touched.dateOfService
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="dateOfService"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="diagnosisCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Diagnosis Code
                    </label>
                    <Field
                      type="text"
                      name="diagnosisCode"
                      id="diagnosisCode"
                      className={`p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.diagnosisCode && touched.diagnosisCode
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="diagnosisCode"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="doctorNotes"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Doctor's Notes
                    </label>
                    <Field
                      as="textarea"
                      name="doctorNotes"
                      id="doctorNotes"
                      rows={4}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.doctorNotes && touched.doctorNotes
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="doctorNotes"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
