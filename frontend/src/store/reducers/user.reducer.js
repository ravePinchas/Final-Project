export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USERS = 'ADD_USERS';
export const HELLO = 'HELLO';

const initialState = {
  users: [
    {
      _id: "u101",
      email: "user1@gmail.com",
      username: "user1",
      password: "secret"
      // fullname: "User 1",
      // imgUrl: "/img/img1.jpg",
    },
    {
      _id: "u102",
      email: "user2@gmail.com",
      username: "user2",
      password: "secret",
      // fullname: "User 2",
      // imgUrl: "/img/img2.jpg",
    }
  ],
  currentUser: null,
};


export function userReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return{
        ...state,
        users: [...state.users, action.userToSave],
        currentUser: {...action.userToSave},
    };
    case SIGN_UP:
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUser: action.payload
      };
    case LOG_IN:
      return{
        ...state,
        currentUser: {...action.user},
      };
    case UPDATE_USER:
      const updatedUsers = state.users.map((user) =>
        user.email === action.payload.email ? action.payload : user
      );
      return {
        ...state,
        users: updatedUsers,
      };
    case HELLO:
      console.log("hello");
      return state
    default:
      return state
  }
};

