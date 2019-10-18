import Validator from 'validator';
import isEmpty from '../../../common/isEmpty/isEmpty';

const validateForm = ({ data, arr, selected }) => {
  let errors = {};

  // Check if Empty
  data = !isEmpty(data) ? data : '';

  // Validate valid value array keys
  if(!arr.includes(data)) {
    // if(arr.filter(i => i === data).length > 0)
    errors.search = 'Enter a valid value!'
  }

  // Validate unique value
  if(selected.includes(data)) {
    if(arr.filter(i => i === data).length > 0)
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