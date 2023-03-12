import FormContact from '../../components/FormaContact/FormaContact';
import Filter from '../../components/Filter/Filter';
import ListContacts from '../../components/ListContact/ListContact';
import { useSelector } from 'react-redux';
import { selectModalOpen, selectModalContact, getState } from 'redux/selectors';
import { ModalEdit } from '../../components/Modal/Modal';
import { Typography } from '@mui/material';
import { ContactBox, ListSearch } from './Contact.styled';

const Contacts = () => {
  const closeModal = useSelector(selectModalOpen);
  const openModal = useSelector(selectModalContact);
  const { loading } = useSelector(getState);

  return (
    <ContactBox sx={{ flexGrow: 1 }}>
      <FormContact />
      <ListSearch>
        <Filter />
        {!openModal
          ? loading && (
              <Typography variant="h6" sx={{ ml: 5 }}>
                ...Loading
              </Typography>
            )
          : null}
        <ListContacts />
      </ListSearch>
      {openModal ? <ModalEdit /> : closeModal}
    </ContactBox>
  );
};

export default Contacts;