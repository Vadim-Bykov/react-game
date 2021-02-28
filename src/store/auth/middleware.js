import { setLogin, setEmail, setPassword } from "./actions"

export const setAuthData = ({ login, email, password }) => (dispatch) => {
  console.log('Ok');
  dispatch(setLogin(login));
  dispatch(setEmail(email));
  dispatch(setPassword(password));
};