export const SET_CHECKIN_DATE = 'SET_CHECKIN_DATE'
export const SET_CHECKOUT_DATE = 'SET_CHECKOUT_DATE'
export const SET_NUMBER_OF_DAYS = 'SET_NUMBER_OF_DAYS'

const initialState = {
  orders : [],
  checkInDate: null,
  checkOutDate: null,
  numberOfDays: 1,
  currentOrder: null,
}

export function orderReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CHECKIN_DATE:
      return { ...state, checkInDate: action.payload }
    case SET_CHECKOUT_DATE:
      return { ...state, checkOutDate: action.payload }
    case SET_NUMBER_OF_DAYS:
      return { ...state, numberOfDays: action.payload }
    case 'SET_ORDER_ID':
      return {
        ...state,
        orderID: action.payload // Update the order ID in the state
      };
    case "ADD_ORDER":
          return {
              ...state,
              orders: [...state.orders, action.order],
              currentOrder: action.order,
             
          }
    case "UPDATE_CURRENT_ORDER":
      return {
        ...state,
          currentOrder: action.order,
      }
              // case "SET_ORDER_DATES":
    //   return {
    //     ...state,
    //     orders: state.orders.map(order => {
    //       if (order._id === action.payload.orderId) {
    //         return {
    //           ...order,
    //           startDate: action.payload.startDate,
    //           endDate: action.payload.endDate
    //         };
    //       }
    //       return order;
    //     })
    //   }
    default:
      return state
  }
}
