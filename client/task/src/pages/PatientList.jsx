import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPatients } from "../services/api";

export default function PatientList() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(10);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setIsLoading(true);
    try {
      const data = await getPatients();
      setPatients(data);
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPatients = patients.filter((patient) =>
    patient.personal_information.full_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Patient List</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <input
                type="text"
                placeholder="Search patients..."
                className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                aria-label="Search patients"
              />
              <button className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors duration-200">
                Add Patient
              </button>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : currentPatients.length > 0 ? (
              <>
                <ul className="divide-y divide-gray-200">
                  {currentPatients.map((patient) => (
                    <li
                      key={patient._id}
                      className="py-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                      onClick={() =>
                        navigate(`/patient/`, { state: patient._id })
                      }
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-semibold text-lg">
                              {patient.personal_information.full_name
                                .charAt(0)
                                .toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-grow">
                          <h2 className="text-lg font-semibold text-gray-900">
                            {patient.personal_information.full_name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            Age:{" "}
                            {calculateAge(
                              patient.personal_information.date_of_birth
                            )}
                          </p>
                        </div>
                        <div className="ml-4">
                          <svg
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                      {patient.medical_history && (
                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                          {patient.medical_history.previous_conditions[0]}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <nav className="flex justify-center">
                    <ul className="flex">
                      {Array.from(
                        {
                          length: Math.ceil(
                            filteredPatients.length / patientsPerPage
                          ),
                        },
                        (_, i) => (
                          <li key={i}>
                            <button
                              onClick={() => paginate(i + 1)}
                              className={`mx-1 px-3 py-2 rounded-md ${
                                currentPage === i + 1
                                  ? "bg-black text-white"
                                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                              }`}
                            >
                              {i + 1}
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                  </nav>
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500 py-8">
                No patients found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
