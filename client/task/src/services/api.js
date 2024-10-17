import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export async function RegisterUser(data) {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export async function LoginUser(data) {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getPatients = async () => {
  const response = await api.get("/patients/");
  return response.data;
};

export const getPatientById = async (id) => {
  const response = await api.get(`/patients/${id}`);
  return response.data;
};

export const getRequests = async (id) => {
  const response = await api.get(`/authorizations/${id}`);
  return response.data;
};

export const createAuthorizationRequest = async (data) => {
  const response = await api.post("/authorizations", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
