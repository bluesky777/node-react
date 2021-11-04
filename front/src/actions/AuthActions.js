import { AUTH_TYPES } from "./AuthTypes";
import api from "../data/api";
import { AuthService } from "../services/AuthServices";

export const loadUserFromToken = () => (dispatch, getState) => {
  dispatch({ type: AUTH_TYPES.LOGIN_LOADING });
  
  if (!localStorage.getItem('token')) {
    dispatch({ type: AUTH_TYPES.AUTH_ERROR });
  }
  
  api.get("/login/load-user-from-token").then(
    (response) => {
        dispatch({ type: AUTH_TYPES.USER_LOADED_FROM_TOKEN, user: response.data });
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: AUTH_TYPES.AUTH_ERROR });
    }
  );
};

export const attempLogin = (datos) => (dispatch, getState) => {
  dispatch({ type: AUTH_TYPES.LOGIN_LOADING });
  AuthService.login(datos).then(
    (response) => {
      if (response.data.user) {
        dispatch({ type: AUTH_TYPES.LOGIN_SUCCESS, payload: response.data });
      }
    },
    (err) => {
      dispatch({ type: AUTH_TYPES.AUTH_ERROR });
    }
  );
};

export const attempLogout = () => (dispatch) => {
  AuthService.logout().then(
    (response) => {
      dispatch({ type: AUTH_TYPES.LOGGED_OUT });
    },
    (err) => {
      dispatch({ type: AUTH_TYPES.AUTH_ERROR });
    }
  );
};
