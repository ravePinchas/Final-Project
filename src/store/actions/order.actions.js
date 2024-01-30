export const setCheckInDate = date => ({
  type: 'SET_CHECKIN_DATE',
  payload: date
});

export const setCheckOutDate = date => ({
  type: 'SET_CHECKOUT_DATE',
  payload: date
});

export const setNumberOfDays = days => ({
  type: 'SET_NUMBER_OF_DAYS',
  payload: days
});

export const setOrderDates = (orderId, startDate, endDate) => ({
  type: 'SET_ORDER_DATES',
  payload: { orderId, startDate, endDate }
});

export const setOrderID = (newID) => ({
  type: 'SET_ORDER_ID',
  payload: newID
});