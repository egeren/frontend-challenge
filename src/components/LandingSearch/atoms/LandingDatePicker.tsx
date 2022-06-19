import React, { useState, useEffect, useRef } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { DateTime } from 'luxon';

function LandingDatePicker() {
  const [values, setValues] = useState([
    new DateObject().subtract(4, 'days'),
    new DateObject().add(4, 'days'),
  ]);

  return (
    <div className="date-search-wrapper flex w-[275px] gap-1 items-center">
      <IoCalendarNumberOutline className="date-icon flex-shrink-0 m-0 text-4xl text-white" />
      <div className="input-content-container flex flex-col pl-2">
        <label
          htmlFor="landing-date-input"
          className="font-poppins font-medium text-white"
        >
          Date
        </label>
        <DatePicker
          containerClassName="w-60"
          inputClass="cursor-pointer w-full outline-none bg-transparent text-white placeholder:text-[#dedede]"
          format="DD/MM/YYYY"
          range
          placeholder="Select starting & ending date"
        />
      </div>
    </div>
  );
}

export default LandingDatePicker;