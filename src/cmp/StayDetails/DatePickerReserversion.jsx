import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCheckInDate, setCheckOutDate, setNumberOfDays, setOrderDates } from '../../store/actions/order.actions';
// import './DatePickerReserversion.css'; // Import CSS file for custom styling

export default function DatePickerReserversion({ onAddPopupDate }) {
  const checkInDate = useSelector(storeState => storeState.orderModule.checkInDate)
  const checkOutDate = useSelector(storeState => storeState.orderModule.checkOutDate)


  // const orders = useSelector(state => state.order.orders);
  const dispatch = useDispatch()


  useEffect(() => {
    const calculateNumberOfDays = () => {
      if (checkInDate && checkOutDate) {
        const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays > 0 ? differenceInDays : 0;
      }
      return 0;
    };
    dispatch(setNumberOfDays(calculateNumberOfDays()));
  }, [checkInDate, checkOutDate, dispatch]);

  const handleCheckInChange = date => {
    dispatch(setCheckInDate(date))
  };

  const handleCheckOutChange = date => {
    dispatch(setCheckOutDate(date));
    if (checkInDate) {
      onAddPopupDate()
      dispatch(setOrderDates(null, checkInDate, checkOutDate));
    }
  };

  return (
    <section className="picker-dates">
      <div>
        <h2>Check-in Date:</h2>
        <DatePicker
          selected={checkInDate}
          onChange={handleCheckInChange}
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={new Date()}
          dateFormat="MM/dd/yyyy"
          inline
          className="custom-datepicker"
        />
      </div>
      <div>
        <h2>Check-out Date:</h2>
        <DatePicker
          selected={checkOutDate}
          onChange={handleCheckOutChange}
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={checkInDate}
          dateFormat="MM/dd/yyyy"
          inline
          className="custom-datepicker"
        />
      </div>
    </section>
  );
}