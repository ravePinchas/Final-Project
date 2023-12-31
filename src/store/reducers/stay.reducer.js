export const SET_STAY = 'SET_STAY';
export const ADD_STAY = 'ADD_STAY';
export const REMOVE_STAY = 'REMOVE_STAY';
export const UPDATE_STAY = 'UPDATE_STAY';

const initialState = {
  stays: null,
}

export function stayReducer(state = initialState, action = {}){
  switch (action.type) {
    case SET_STAY:
        return{
          ...state,
          stays: action.stays
        }
    case ADD_STAY:
      return{
        ...state,
        stays: [...state.stays, action.stay]
      }
      case REMOVE_STAY:
        return{
          ...state,
          stays: state.stays.filter(stay => stay._id !== action.stayId)
        }
      case UPDATE_STAY:
        return{
          ...state,
          stays: state.stays.map(stay => stay.id === action.stay.id ? action.stay: stay)
        }

    default:
      return state
  }
}