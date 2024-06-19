import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calendar.module.css";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [tempDate, setTempDate] = useState(selectedDate);

  useEffect(() => {
    setTempDate(selectedDate);
  }, [selectedDate]);

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
    setTempDate(null);
  };

  return (
    <div className={styles.datePickerCustom}>
      <p>Deadline:</p>
      <DatePicker
        selected={tempDate}
        onChange={handleSelectedDate}
        dateFormat="yyyy-MM-dd"
        className={styles.customInput}
      />
    </div>
  );
};

export default Calendar;
