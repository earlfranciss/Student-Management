import axios from "axios";
 
const BASE_URL = import.meta.env.VITE_API_URL;
 
const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
 
export const api = {
  getStudents: async () => {
    const res = await instance.get("/api/student");
    return res.data;
  },
 
  getStudent: async (id) => {
    const res = await instance.get(`/api/student/${id}`);
    return res.data;
  },
 
  createStudent: async (student) => {
    const res = await instance.post("/api/student", student);
    return res.data;
  },
 
  updateStudent: async (id, student) => {
    const res = await instance.put(`/api/student/${id}`, student);
    return res.data;
  },
 
  deleteStudent: async (id) => {
    const res = await instance.delete(`/api/student/${id}`);
    return res.data;
  },
};