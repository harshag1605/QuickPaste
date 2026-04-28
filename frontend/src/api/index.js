import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/pastes';

const api = {
  createPaste: async (pasteData) => {
    const response = await axios.post(API_BASE_URL, pasteData);
    return response.data;
  },
  getPaste: async (shareId) => {
    const response = await axios.get(`${API_BASE_URL}/${shareId}`);
    return response.data;
  },
  updatePaste: async (id, pasteData) => {
    const response = await axios.put(`${API_BASE_URL}/${id}`, pasteData);
    return response.data;
  },
  deletePaste: async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
  },
};

export default api;
