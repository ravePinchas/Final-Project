import { orderService } from '../../services/order.service'
import { store } from "../store";

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

export async function saveOrder(order, isOrderNull) {
  try {
      const type = order._id ? "UPDATE_ORDER" : "ADD_ORDER"
      const orderToSave = isOrderNull ?  await orderService.createOrderStorage(order) : await orderService.save(order)
    
      store.dispatch({ type, order: orderToSave })
  } catch (err) {
      console.log('Had issues loading orders', err);
      throw err
  }
}

export async function updateCurrentOrder(order) {
  try {
      const type = "UPDATE_CURRENT_ORDER"
      store.dispatch({ type, order})
  } catch (err) {
      console.log('Had issues loading orders', err);
      throw err
  }
}