import axios from "axios";
import { FETCH_USER } from "./types";

//fetchUser is the action creator which dispatch an action el feeha el type we el payload
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
//we are still returning a function that makes an api get call and only
//when the api get call resolves then we return an action
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
