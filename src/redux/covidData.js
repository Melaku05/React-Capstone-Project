import axios from 'axios';

const GET_COUNTRY = 'mobile-airpolluton-webapp/covidData/GET_COUNTRIES';

export const getCountry = (success) => {
  axios.get('https://api.covid19tracking.narrativa.com/api?date_from=2020-05-17&date_to=2020-05-20').then((res) => {
    success(res.data);
  });
};

const initialState = [];

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload.dates['2020-05-17'].countries;
    default:
      return state;
  }
};

export const countryAction = () => (dispatch) => {
  getCountry((results) => {
    dispatch({
      type: GET_COUNTRY,
      payload: results,
    });
  });
};
