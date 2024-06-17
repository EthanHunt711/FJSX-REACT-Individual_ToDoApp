import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <h4>deadline: </h4>
      <DatePicker
        selected={selectedDate}
        onChange={handleSelectedDate}
        dateFormat="yyyy-MM-dd"
      />
    </>
  );
};

export default Calendar;
