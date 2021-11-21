import React, { useState, useRef } from "react";
import "./ExpiryDateInput.scss";

export const ExpiryDateInput = () => {
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleMonth = (e) => {
    setMonth(e.target.value);
    if (e.target.value.length >= 2) {
      yearRef.current.focus();
    } else {
      monthRef.current.focus();
    }
  };

  const handleYear = (e) => {
    setYear(e.target.value);
    if (e.target.value.length >= 2) {
      yearRef.current.blur();
    } else {
      yearRef.current.focus();
    }
  };

  return (
    <div className="expirydate">
      <input
        type="text"
        ref={monthRef}
        onChange={(e) => handleMonth(e)}
        placeholder="MM"
        className="expirydate-date"
        value={month}
      ></input>
      <span className="expirydate-seperator">/</span>
      <input
        ref={yearRef}
        type="text"
        placeholder="YY"
        className="expirydate-date"
        onChange={(e) => handleYear(e)}
        value={year}
      ></input>
    </div>
  );
};

export default ExpiryDateInput;
