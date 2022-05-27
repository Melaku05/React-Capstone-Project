import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BiWorld } from 'react-icons/bi';
import { countryAction } from '../redux/covidData';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const valueArray = Object.values(countries);
  const [input, setInput] = useState('');
  useEffect(() => {
    dispatch(countryAction());
  }, [dispatch]);
  return (
    <div>
      <div className="home-header">
        <div>
          <BiWorld size={70} />
        </div>
        <h1> Covid-19 checker</h1>
      </div>
      <div>
        {valueArray.length > 0 ? (
          <section>
            <div className="search-bar">
              <input
                placeholder="Search for a country"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <ul className="home-list">
              {valueArray
                .filter((country) => {
                  if (input === "") {
                    return country;
                  }
                  if (
                    country.name.toLowerCase().includes(input.toLowerCase())
                  ) {
                    return country;
                  }
                  return "";
                })
                .map((country) => (
                  <div className="columns" key={country.id}>
                    <Link to={`/country/${country.name}`}>
                      <div className="country-cards">
                        <div className="card">
                          <div className="content">
                            <div className="home-case-names">
                              {country.name}
                            </div>
                            <div className="home-case-numbers">
                              Cases -&gt;
                              {country.today_confirmed}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </ul>
          </section>
        ) : (
          <div className="loading-page">
            <div className="loading">Loading</div>
            <div className="dot-shuttle" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
