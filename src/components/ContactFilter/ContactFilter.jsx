import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelector';

import { FilterWrap, FilterLabel, FilterInput } from './ContactFilter.styled';

export default function ContainerFilter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  console.log(filterValue);

  const changeFilter = e => {
    console.log(e.target.value);
    dispatch(filterContacts(e.target.value.toLowerCase().trim()));
  };

  return (
    <FilterWrap>
      <FilterLabel htmlFor="search">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        value={filterValue}
        onChange={changeFilter}
        placeholder="Enter name to search"
      />
    </FilterWrap>
  );
}
