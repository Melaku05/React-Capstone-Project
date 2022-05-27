import { countryAction, countryReducer } from '../redux/covidData';

const covidData = {
  dates: {
    '2020-05-17': {
      countries: {
        1: {
          id: 1,
          name: 'Afghanistan',
          today_confirmed: 0,
        },
        2: {
          id: 2,
          name: 'Albania',
          today_confirmed: 0,
        },
      },
    },
  },
};

describe('check funtion', () => {
  test('getCountry should return dispatch function', () => {
    expect(countryAction()).toEqual(expect.any(Function));
  });
  test('countryReducer should return expexted object', () => {
    expect(countryReducer([], { type: 'mobile-airpolluton-webapp/covidData/GET_COUNTRIES', payload: covidData })).toEqual({
      1: {
        id: 1,
        name: 'Afghanistan',
        today_confirmed: 0,
      },
      2: {
        id: 2,
        name: 'Albania',
        today_confirmed: 0,
      },
    });
  });
});
