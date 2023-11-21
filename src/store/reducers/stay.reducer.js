export const SET_STAYS = 'SET_STAYS';
export const ADD_STAYS = 'ADD_STAYS';
export const REMOVE_STAYS = 'REMOVE_STAYS';
export const UPDATE_STAYS = 'UPDATE_STAYS';

const initialState = {
  stays: null,
}

export function stayReducer(state = initialState, action = {}){
  switch (action.type) {
    case SET_STAYS:
        return{
          ...state,
          stays: action.stays
        }
    case ADD_STAYS:
      return{
        ...state,
        stays: [...state.stays, action.stay]
      }
      case REMOVE_STAYS:
        return{
          ...state,
          stays: state.stays.filter(stay => stay.id !== action.stayId)
        }
      case UPDATE_STAYS:
        return{
          ...state,
          stays: state.stays.map(stay => stay.id === action.stay.id ? action.stay: stay)
        }

    default:
      return state
  }
}