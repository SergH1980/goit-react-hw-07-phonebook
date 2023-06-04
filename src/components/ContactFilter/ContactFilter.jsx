import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelector';

import { FilterWrap, FilterLabel, FilterInput } from './ContactFilter.styled';

export default function ContainerFilter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const changeFilter = e => {
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
