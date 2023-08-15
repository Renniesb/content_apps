import axios from "axios";
const API_ENDPOINT = process.env.REACT_APP_CONTENT_API_ENDPOINT;

async function fetchData() {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data.media;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export { fetchData };
