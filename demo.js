
//inside StayDetails component
function onSaveOrder() {
  if (numberOfDays <= 1) {
    return
  }
  var newOrder = {
    startDate: checkIn,
    endDate: checkOut,
    numberOfDays: numberOfDays,
    totalPrice: numberOfDays * stay.price,
    stay: {
      _id: stay._id,
      name: stay.name,
      price: stay.price
    },
  }
  saveOrder(newOrder)
}

//order.action
export async function saveOrder(order) {
  try {
      const type = order._id ? "UPDATE_ORDER" : "ADD_ORDER"
      const orderToSave = await orderService.save(order)
      store.dispatch({ type, order: orderToSave })
  } catch (err) {
      console.log('Had issues loading orders', err);
      throw err
  }
}


