import axios from "axios"

export const API_URL = "https://votar-batallas-freestyle-django.onrender.com/api/"
// export const API_URL = "http://localhost:8000/api/"

export const getCountries = () => {
  return axios.get(`${API_URL}countries/`)
}

export const getSeasons= () => {
  return axios.get(`${API_URL}seasons/`)
}

export const getCompetitions = () => {
  return axios.get(`${API_URL}competitions/`)
}

export const getGroups = () => {
  return axios.get(`${API_URL}groups/`)
}

export const getFreestylers = () => {
  return axios.get(`${API_URL}freestylers/`)
}

export const getBattles = () => {
  return axios.get(`${API_URL}battles/`)
}

export const getJudges = () => { // Users
  return axios.get(`${API_URL}users/`)
}

export const getTokens = () => {
  return axios.get(`${API_URL}tokens/`)
}

export function getToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}