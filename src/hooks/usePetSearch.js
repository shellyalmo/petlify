import { useEffect, useReducer } from "react";
import { catsApi, dogsApi } from "../api/api";

const initialState = {
  pets: [],
  loading: false,
  error: null,
};

const ACTIONS = {
  API_REQUESTS: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.API_REQUESTS:
      return { ...state, pets: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, pets: payload, loading: false };
    case ACTIONS.ERROR:
      return { ...state, pets: [], error: payload };
    default:
      return state;
  }
}

function usePetSearch(species) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUESTS });
    (species === "cats" ? catsApi : dogsApi)
      .get("/images/search?limit=10")
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, [species]);
  return state;
}

export default usePetSearch;
