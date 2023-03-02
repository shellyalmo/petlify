import axios from "axios";

const catsApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

const dogsApi = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
});

export { catsApi, dogsApi };
