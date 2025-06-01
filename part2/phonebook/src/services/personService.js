import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addNumber = (newContact) => {
  const request = axios.post(baseUrl, newContact)
  return request.then(response => response.data)
}

const updateNumber = (id, updatedNumber) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedNumber)
  return request.then(response => response.data)
}

const deleteNumber = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, addNumber, updateNumber, deleteNumber }