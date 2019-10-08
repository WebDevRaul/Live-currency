import React from 'react';

import SearchInput from './SearchInput';
import Icon from './Icon';

import StyledSearchBar from './Styled_SearchBar';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <div className='search-bar'>
        <SearchInput />
        <Icon />
      </div>
    </StyledSearchBar>
  )
}

export default SearchBar;