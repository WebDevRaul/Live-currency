import Validator from 'validator';
import isEmpty from '../../../common/isEmpty/isEmpty';

const validateForm = ({ data, arr }) => {
  let errors = {};

  // Check if Empty
  data = !isEmpty(data) ? data : '';

  // Validate valid value
  if(!arr.includes(data)) {
    // if(arr.filter(i => i === value).length > 0)
    errors.search = 'Enter a valid value!'
  }

  // Validate unique value
  if(arr.includes(data)) {
    // if(arr.filter(i => i === value).length > 0)
    errors.search = 'Specified value exits!'
  }

  // Validate Length
  if (!Validator.isLength(data, { min:3, max: 3 })) {
    errors.search = 'Min/Max value is 3!'
  }

  // Validate Empty
  if (Validator.isEmpty(data)) {
    errors.search = 'Search field cant be empty!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateForm;