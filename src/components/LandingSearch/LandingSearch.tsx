import React, { useState, useEffect } from 'react';
import LandingDatePicker from './atoms/LandingDatePicker';
import LandingEventType from './atoms/LandingEventType';
import LandingLocationInput from './atoms/LandingLocationInput';
import Seperator from 'components/Seperator';

function LandingSearch() {
  return (
    <div className="landing-search-wrapper 2xl:w-[1000px] xl:w-[800px] lg:w-[750px] md:w-2/3 w-full">
      <div className="landing-search-container relative flex lg:flex-row flex-col gap-4 w-full px-4 py-3">
        <div className="absolute left-0 top-0 bg-white blur-[1px] bg-opacity-20 rounded-md w-full h-full -z-10" />
        <LandingLocationInput />
        <Seperator size="100%" color="#FFFFFFaa" />
        <LandingDatePicker />
        <Seperator size="100%" color="#FFFFFFaa" />
        <LandingEventType />
      </div>
    </div>
  );
}

export default LandingSearch;
