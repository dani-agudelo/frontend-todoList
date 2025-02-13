import axios from 'axios';

const API_URL = 'http://localhost:8080/api/todos'; // TODO Cambiar y poner en un archivo de configuración

export const getAllTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (task) => {
  const response = await axios.post(API_URL, { task });
  return response.data;
};

export const toggleTodoCompletion = async (id) => {
  const response = await axios.put(`${API_URL}/${id}/toggle`);
  return response.data;
};