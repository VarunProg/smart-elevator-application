import axios from "axios";
import { API_ENDPOINT } from "../utils/constant";

export const getAllElevatorDetails = (): Promise<any> => {
  return axios.get(`http://localhost:3000/getElevatorData/`).then((data) => {
    return data;
  });
};

// Function to get elevator details based on elevatorId
export const getAllElevatorDetailsById = (elevatorId: string) => {
  const url = `http://localhost:3000/getElevatorData/${elevatorId}`;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
