import axios from 'axios';
import { GET_FIRST_CALL, GET_ERRORS } from './types';

//Make request to fixer.io for first 5 base rates
export const firstCall  = calldata => dispatch => {
  axios
    .get()
}