import { SIGN_UP, LOG_IN, ADD_USERS } from '../reducers/user.reducer';
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

export async function saveUser(user) {
  console.log("user saveUser  ", user.email);
  try {
      const existingUser = await userService.getByEmail(user.email);
      if (existingUser) {
          console.log('User already exists with this email:', existingUser);
          alert('User already exists with this email.');
          return existingUser;
      }
      
      const newUser = await userService.save(user); // Ensure this function saves with email as key
      return newUser; // Return the saved user
  } catch (err) {
      console.log('Error saving user:', err);
      throw err;
  }
}

export async function loginUser(credentials) {
  try {
    const type = LOG_IN;
    const user = await userService.login(credentials);

    // Dispatch the action to log in the user
    store.dispatch({ type, user });

    return user; // You can return the logged-in user if needed
  } catch (err) {
    console.log('Had issues logging in user', err);
    throw err;
  }
}

export const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});