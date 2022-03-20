import * as React from 'react';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { SearchInputWrapper, StyledSearchInput } from './SearchInputStyle'
import { FiSearch } from 'react-icons/fi';

interface ISearchInput {
  placeholder: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: string,
}

export const SearchInput:FC<ISearchInput> = observer(({ onChange, value, placeholder }) => {
  return <SearchInputWrapper>
    <StyledSearchInput value={value} onChange={(e) => onChange(e)} placeholder={placeholder}/>
    <FiSearch className='search-icon' size={'2.5em'} />
  </SearchInputWrapper>
});
