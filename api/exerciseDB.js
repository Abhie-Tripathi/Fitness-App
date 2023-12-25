import { rapidApiKey } from "../constants";
import axios from "axios";

const baseURL = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios(options);
    return response.data;
  } catch (err) {
    console.log("Error :", err.message);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  let data = await apiCall(baseURL + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
