import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calendar.module.css";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.datePickerCustom}>
      <p>Deadline:</p>
      <DatePicker
        selected={selectedDate}
        onChange={handleSelectedDate}
        dateFormat="yyyy-MM-dd"
        className={styles.customInput}
      />
    </div>
  );
};

export default Calendar;
