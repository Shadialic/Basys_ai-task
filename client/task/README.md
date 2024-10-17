Patient Dashboard and Prior Authorization System
Project Overview:

This application is a healthcare management system that includes a Patient Dashboard and a Prior Authorization form for healthcare providers. It consists of a React frontend and a Node.js backend with MongoDB as the database. The system enables healthcare providers to view patient details and submit prior authorization requests for treatments.


Patient Dashboard:

-View a list of patients with their name, age, and medical condition.
-Detailed view of selected patient with medical history, treatments, medication history, and lab results.
-Search and filter patients for easy navigation.

Prior Authorization Form:

-Submit a prior authorization request for treatments and procedures.
-Form includes fields for treatment type, insurance details, service date, diagnosis code, etc.
-Basic client-side validation is implemented.

Responsive Design:

Built with responsive design principles using Tailwind CSS or Bootstrap for mobile-friendly layouts.
Backend (Node.js, Express, MongoDB)

Patient Data API:

-REST API to retrieve patient data from MongoDB.
-API allows submitting prior authorization requests, stored in the database.

Authorization API:

-API to handle prior authorization requests, including patient ID, treatment details, and request status (pending/approved/denied).

Technologies Used :
-Frontend
-React.js
-Tailwind CSS 
-Axios (for API requests)
-Backend
-Node.js
-Express.js
-MongoDB
-Mongoose (for MongoDB schema management)


Setup Instructions

git clone https://github.com/Shadialic/Basys_ai-task.git

client side 
cd client/task
npm run dev

server side:
cd server
npm start

Frontend Details:
The frontend consists of the following key components:

1. Dashboard Component: Displays the list of patients and includes a search bar for filtering.
2. PatientDetail Component: Shows detailed information of a selected patient.
3. AuthorizationForm Component: Allows submission of prior authorization requests with client-side validation.
4.Responsive Design: Achieved using Tailwind CSS or Bootstrap, ensuring the application works smoothly on both desktop and mobile devices.


Here's a sample README file for your project. Feel free to adjust the content based on any additional details or preferences:

Patient Dashboard and Prior Authorization System
Project Overview
This application is a healthcare management system that includes a Patient Dashboard and a Prior Authorization form for healthcare providers. It consists of a React frontend and a Node.js backend with MongoDB as the database. The system enables healthcare providers to view patient details and submit prior authorization requests for treatments.

Table of Contents
Features
Technologies Used
Setup Instructions
API Endpoints
Frontend Details
Backend Details
Database Structure
Features
Frontend (React)
Patient Dashboard:

View a list of patients with their name, age, and medical condition.
Detailed view of selected patient with medical history, treatments, medication history, and lab results.
Search and filter patients for easy navigation.
Prior Authorization Form:

Submit a prior authorization request for treatments and procedures.
Form includes fields for treatment type, insurance details, service date, diagnosis code, etc.
Basic client-side validation is implemented.
Responsive Design:

Built with responsive design principles using Tailwind CSS or Bootstrap for mobile-friendly layouts.
Backend (Node.js, Express, MongoDB)
Patient Data API:

REST API to retrieve patient data from MongoDB.
API allows submitting prior authorization requests, stored in the database.
Authorization API:

API to handle prior authorization requests, including patient ID, treatment details, and request status (pending/approved/denied).
Technologies Used
Frontend
React.js
Tailwind CSS / Bootstrap
Axios (for API requests)
Backend
Node.js
Express.js
MongoDB
Mongoose (for MongoDB schema management)
Setup Instructions
1. Clone the repository:
bash
Copy code
git clone https://github.com/your-repo/patient-dashboard.git
cd patient-dashboard
2. Install dependencies:
Frontend:
bash
Copy code
cd frontend
npm install
Backend:
bash
Copy code
cd backend
npm install
3. Set up environment variables:
Create a .env file in the backend directory with the following variables:

bash
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=your_backend_port
4. Run the application:
Frontend:
bash
Copy code
cd frontend
npm start
Backend:
bash
Copy code
cd backend
npm run dev
The frontend will run on http://localhost:3000, and the backend will run on http://localhost:5000.

API Endpoints
Patient Data API
GET /api/patients
Fetch the list of patients.

GET /api/patients/

Fetch detailed information about a specific patient.

Authorization API
POST /api/authorization
Submit a new prior authorization request.

GET /api/authorization
Fetch a list of all prior authorization requests.

Frontend Details
The frontend consists of the following key components:

Dashboard Component: Displays the list of patients and includes a search bar for filtering.
PatientDetail Component: Shows detailed information of a selected patient.
AuthorizationForm Component: Allows submission of prior authorization requests with client-side validation.
Responsive Design: Achieved using Tailwind CSS or Bootstrap, ensuring the application works smoothly on both desktop and mobile devices.


Backend Details:
The backend is built with Express.js and interacts with a MongoDB database. Key routes include:

1.Patients API:
Retrieves patient data from the database.
2.Authorization API:
Handles requests to submit, store, and retrieve prior authorization details.


