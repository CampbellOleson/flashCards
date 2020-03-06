import axios from "axios";

export const fetchCards = () => {
  return axios.get("/cards");
};
