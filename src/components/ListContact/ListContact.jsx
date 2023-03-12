import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeContact, getAllContacts } from 'redux/operations';
import { editContact } from 'redux/modalSlice';
import { getFilter, selectModalContact } from 'redux/selectors';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  ItemContact,
  BtnDelete,
  BoxList,
  BoxBtn,
  TypoContact,
  BtnEdit,
} from './ListContact.styled';

const ListContacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(getFilter);
  const modalDataContact = useSelector(selectModalContact);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch, modalDataContact]);

  const deleteContact = id => {
    return dispatch(removeContact(id));
  };

  const editContactData = id => {
    const dataContact = items.find(item => item.id === id);
    dispatch(editContact(dataContact));
  };

  const contact = items.map(({ id, name, number }) => {
    return (
      <ItemContact
        component="li"
        key={id}
        flexGrow={2}
        container
        rowSpacing={-5}
        spacing={4}
      >
        <BoxBtn>
          <BtnDelete type="button" onClick={() => deleteContact(id)}>
            <DeleteIcon />
          </BtnDelete>
          <BtnEdit type="button" onClick={() => editContactData(id)}>
            <EditIcon />
          </BtnEdit>
        </BoxBtn>
        <TypoContact
          variant="subtitle1"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <AccountBoxIcon color="primary" />
          {name}
        </TypoContact>
        <TypoContact
          variant="subtitle1"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <PhoneInTalkIcon color="primary" />
          {number}
        </TypoContact>
      </ItemContact>
    );
  });

  return (
    <BoxList component="ul">
      {items.length < 1 && (
        <TypoContact variant="h6" sx={{ ml: 5 }}>
          Haven't any contact...
        </TypoContact>
      )}{' '}
      {contact}
    </BoxList>
  );
};

export default ListContacts;

ListContacts.propTypes = {
  arrayContacts: PropTypes.array,
  button: PropTypes.element,
};