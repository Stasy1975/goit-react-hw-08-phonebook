import { React } from 'react';
import { getFilter } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {filterContact} from '../../redux/filterSlice'
// import { getFilter } from 'redux/selectors';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Box } from '@mui/material';
import { SearchField } from './Filter.styled';


function Filter() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(getFilter);

  const handleFilter = e => {
    const search = e.target.value;
    dispatch(filterContact(search));
  };
  return (
    <Box sx={{ width: '250px' }}>
      <SearchField
        type="text"
        name="search"
        margin="normal"
        fullWidth
        size="small"
        label="Seacr Contact"
        color="secondary"
        value={contactsFilter}
        onChange={handleFilter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Filter;