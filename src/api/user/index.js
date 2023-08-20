import axios from "axios";
const API_BASE_URL = "http://localhost:3008";

const getUsersData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};
const getUserData = async (id) => {
  try {
    // const response = await axios.get(`${API_BASE_URL}/user/${id}`);
    // return response.data;
    const { data } = await axios.get(`${API_BASE_URL}/user/${id}`);
    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};

const getUserActivityData = async (id) => {
  try {
    // const response = await axios.get(`${API_BASE_URL}/user/${id}/activity`);
    // return response.data;
    const { data } = await axios.get(`${API_BASE_URL}/user/${id}/activity`);
    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};

const getUserAverageSession = async (id) => {
  try {
    // const response = await axios.get(
    //   `${API_BASE_URL}/user/${id}/average-sessions`
    // );
    // return response.data;
    const { data } = await axios.get(
      `${API_BASE_URL}/user/${id}/average-sessions`
    );
    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};

const getUserPerformance = async (id) => {
  try {
    // const response = await axios.get(`${API_BASE_URL}/user/${id}/performance`);
    // return response.data;
    const { data } = await axios.get(`${API_BASE_URL}/user/${id}/performance`);
    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};
export {
  getUsersData,
  getUserData,
  getUserActivityData,
  getUserAverageSession,
  getUserPerformance,
};
