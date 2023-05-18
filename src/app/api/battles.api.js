import axios from "axios"

export const getCountries = () => {
  return axios.get("https://votar-batallas-freestyle-django.onrender.com/api/countries/")
}

export const getSeasons= () => {
  return axios.get("https://votar-batallas-freestyle-django.onrender.com/api/seasons/")
}

export const getCompetitions = () => {
  return axios.get("https://votar-batallas-freestyle-django.onrender.com/api/competitions/")
}

export const getGroups = () => {
  return axios.get("https://votar-batallas-freestyle-django.onrender.com/api/groups/")
}

export const getFreestylers = () => {
  return axios.get("https://votar-batallas-freestyle-django.onrender.com/api/freestylers/")
}

export const getBattles = () => {
  return axios.get("https://votar-batallas-freestyle-django.onrender.com/api/battles/")
}

export const getJudges = () => { // Users
  return axios.get("https://votar-batallas-freestyle-django.onrender.com/api/users/")
}

export const getTokens = () => { // Users
  return axios.get("https://votar-batallas-freestyle-django.onrender.com/api/tokens/")
}