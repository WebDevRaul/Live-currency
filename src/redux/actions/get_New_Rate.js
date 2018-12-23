import axios from 'axios';
import { GET_NEW_RATE_TODAY, GET_ERRORS, GET_NEW_RATE_YESTERDAY, GET_NEW_RATE_LAST_YEAR, GET_EXCHANGE_NEW_TODAY, GET_EXCHANGE_NEW_YESTERDAY, GET_EXCHANGE_NEW_LAST_YEAR } from './types';

//import Loading action
import { setNewRateLoading } from './commonAction';

//import isEmpty from common
import isEmpty from '../../components/common/isEmpty';

export const get_New_Rate = (base, date, newSymbols) => dispatch => {
  dispatch(setNewRateLoading());
    //Get NewRateToday
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${newSymbols}`)
      .then(res => {
        
        //If (1)

        if (isEmpty(res.data.rates)) {
          axios
            .get()
            .then()
            .catch()

        //Else (1)

        } else {
          dispatch({
            type: GET_NEW_RATE_TODAY,
            payload: res.data.rates
          })
        }
      })
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
    //GetNewRateYesterday
    axios
      .get()
      .then()
      .catch()
    //GetNewRateLastYear
    axios
      .get()
      .then()
      .catch()
};