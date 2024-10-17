import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AddPatient() {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    condition: '',
    medicalHistory: '',
    treatmentPlan: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulating a successful API response
      console.log('Patient data submitted:', patientData)

      alert('Patient added successfully!')
      history.push('/')
    } catch (error) {
      console.error('Error adding patient:', error)
      alert('Error adding patient. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Add New Patient</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={patientData.name}
            onChange={handleChange}
            placeholder="Enter patient's full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="age" className="block text-sm font-medium">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            value={patientData.age}
            onChange={handleChange}
            placeholder="Enter patient's age"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="condition" className="block text-sm font-medium">
            Condition
          </label>
          <input
            id="condition"
            name="condition"
            value={patientData.condition}
            onChange={handleChange}
            placeholder="Enter patient's primary condition"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="medicalHistory" className="block text-sm font-medium">
            Medical History
          </label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={patientData.medicalHistory}
            onChange={handleChange}
            placeholder="Enter patient's medical history"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows={4}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="treatmentPlan" className="block text-sm font-medium">
            Treatment Plan
          </label>
          <textarea
            id="treatmentPlan"
            name="treatmentPlan"
            value={patientData.treatmentPlan}
            onChange={handleChange}
            placeholder="Enter patient's treatment plan"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 text-white font-semibold rounded-md transition-colors ${
            isLoading
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Adding Patient...' : 'Add Patient'}
        </button>
      </form>
    </div>
  )
}
