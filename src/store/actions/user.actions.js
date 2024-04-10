import { SIGN_UP, LOG_IN, ADD_USERS, HELLO, ADD_USER } from '../reducers/user.reducer';
import { userService } from '../../services/user.service';
import { store } from "../store";


export const signUp = (user) => ({
  type: SIGN_UP,
  payload: user,
});

export const logIn = (credentials) => ({
  type: LOG_IN,
  payload: credentials,
});

export const hello = (credentials) => ({
  type: HELLO,
  payload: credentials,
});

export async function saveUser(user) {
  try {
    const type = ADD_USER
    const userToSave = await userService.save(user)
    console.log('userToSave:',userToSave);
    store.dispatch({type, userToSave})
  }
  catch (err) {
      console.log('Error saving user:', err);
      throw err;
  }
}

export async function loginUser(user) {
  try {
    const type = LOG_IN
    store.dispatch({type, user})
  }
  catch (err) {
      console.log('Error saving user:', err);
      throw err;
  }
}