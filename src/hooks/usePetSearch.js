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

function usePetSearch(species, breed) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    dispatch({ type: ACTIONS.API_REQUESTS });
    (species === "cats" ? catsApi : dogsApi)
      .get(`/images/search?breed_ids=${breed}&limit=10`, {
        signal: controller.signal,
      })
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
    return () => controller.abort();
  }, [species, breed]);
  return state;
}

export default usePetSearch;
