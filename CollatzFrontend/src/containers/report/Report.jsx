import React from 'react';
import { Article } from '../../components';
import { locationImage, hotelImage, flightImage, rentalImage, attractionImage } from './imports';
import './report.css';

const Report = () => {
  return (
    <div className="collatz__report section__padding" id="report">
        <div className="collatz__report-heading">
          <h1>
            Here's Your Report
          </h1>
          <div className="collatz__report-subheading">
              Location Name
          </div>
        </div>
        <div className="collatz__report-container">
          <div className="collatz__report-container_1">
            <Article imgUrl={locationImage} title="Attraction" locationTitle={"Attraction Title"}/>
          </div>
          <div className="collatz__report-container_2">
            <Article imgUrl={hotelImage} title="Hotels" locationTitle={"Hotel Name"}/>
            <Article imgUrl={attractionImage} title="Attractions" locationTitle={"Attraction Name"}/>
            <Article imgUrl={flightImage} title="Flights" locationTitle={"Flight Name"}/>
            <Article imgUrl={rentalImage} title="Rentals" locationTitle={"Rental Name"}/>
          </div>
        </div>
    </div>
  )
}

export default Report