import React, { forwardRef } from 'react';
import { SearchIcon } from '../icons/SearchIcon';
import { debounce } from '../utils/input';

export const Search = forwardRef(
  ({ onChange, placeholder = 'Search...', ...props }, ref) => {
    return (
      <div className="search-input">
        <SearchIcon />
        <input
          ref={ref}
          type="text"
          onChange={debounce(onChange)}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);
