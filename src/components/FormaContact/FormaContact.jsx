import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { Box, InputAdornment } from '@mui/material';
import { BtnAddContact, FormField } from './FormaContact.styled';

const FormContact = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const {
      elements: { name, number },
    } = e.target;
    const nameUser = items.find(
      item => item.name === name.value ?? item.number === number.value
    );
    if (nameUser) {
      return alert(`${nameUser.name} alredy have`);
    }
    dispatch(
      addContact({
        name: name.value,
        number: number.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={{ width: '250px' }}>
      <form onSubmit={handleSubmit}>
        <FormField
          required
          name="name"
          label="Name"
          fullWidth
          variant="outlined"
          color="secondary"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon color="primary" />
              </InputAdornment>
            ),
            type: 'text',
            name: 'name',
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
        >
          Name
        </FormField>
        <FormField
          type="tel"
          required
          name="number"
          label="Number"
          fullWidth
          variant="outlined"
          color="secondary"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon color="primary" />
              </InputAdornment>
            ),
            type: 'tel',
            name: 'number',
            pattern:
              '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          }}
        >
          Number
        </FormField>
        <BtnAddContact
          // disabled
          size="medium"
          type="submit"
        >
          <AddCircleOutlineIcon />
        </BtnAddContact>
      </form>
      <Outlet />
    </Box>
  );
};

FormContact.propTypes = {
  lable: PropTypes.string,
};

export default FormContact;

