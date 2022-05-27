import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { countryId } = useParams();
  const countryNames = useSelector((state) => state);
  const namesArray = Object.values(countryNames);
  const currentCountry = namesArray[0][countryId];

  return (
    <section className="details-section">
      <div className="details-header">
        <div className="details-title">
          {countryId}
          {' '}
          Covid Details
        </div>
        <div className="details-total">
          Total cases:
          {currentCountry.today_confirmed}
        </div>
      </div>
      <ul className="details-list">
        <li className="details-row">
          Today&apos;s confirmed cases
          <span>{currentCountry.today_new_confirmed}</span>
        </li>
        <li className="details-row">
          Today&apos;s recovered cases
          <span>{currentCountry.today_new_recovered}</span>
        </li>
        <li className="details-row">
          Total Deaths
          <span>{currentCountry.today_deaths}</span>
        </li>
        <li className="details-row">
          Total recovered cases
          <span>{currentCountry.today_recovered}</span>
        </li>
      </ul>
    </section>
  );
};

export default CountryDetails;
