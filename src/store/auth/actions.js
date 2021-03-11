import { AUTH_LOGOUT, AUTH_SET_DATA } from "./actionTypes";

export const setAuthData = (data) => ({
   type: AUTH_SET_DATA,
   data: { ...data },
   isAuth: true,
});

export const logout = () => ({ type: AUTH_LOGOUT });

