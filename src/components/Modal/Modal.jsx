import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModalContact } from 'redux/selectors';
import { editContact } from 'redux/modalSlice';
import { patchContact } from 'redux/operations';
import SaveIcon from '@mui/icons-material/Save';
import { Typography, Button, TextField } from '@mui/material';
import { Overlay, FormModal, BoxInput } from './Modal.styled';

export const ModalEdit = () => {
  const overlay = document.getElementById('popup-root');
  const dispatch = useDispatch();
  const modalDataContact = useSelector(selectModalContact);

  useEffect(() => {
    window.addEventListener('keydown', onCloseEscape);

    return () => {
      window.removeEventListener('keydown', onCloseEscape);
    };
  });

  const closeModal = () => {
    dispatch(editContact(null));
  };

  const onCloseEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const onCloseClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const handleEdit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(patchContact(modalDataContact.id), {
      name: modalDataContact.name,
      number: modalDataContact.number,
    });
    closeModal();
    form.reset();
  };

  return createPortal(
    <Overlay onClick={onCloseClickBackdrop}>
      <FormModal onSubmit={handleEdit}>
        <BoxInput>
          <label>
            <Typography variant="overline">Name</Typography>
            <TextField
              type="text"
              name="name"
              onChange={e =>
                dispatch(
                  editContact({
                    id: modalDataContact.id,
                    name: e.target.value,
                    number: modalDataContact.number,
                  })
                )
              }
              value={modalDataContact.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </BoxInput>
        <BoxInput>
          <label>
            <Typography variant="overline">Number</Typography>
            <TextField
              type="tel"
              name="number"
              onChange={e =>
                dispatch(
                  editContact({
                    id: modalDataContact.id,
                    name: modalDataContact.name,
                    number: e.target.value,
                  })
                )
              }
              value={modalDataContact.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </BoxInput>
        <Button
          type="submit"
          size="small"
          color="primary"
          startIcon={<SaveIcon />}
          variant="contained"
          sx={{ mt: 2, backgroundColor: 'rgba(28, 130, 189, 0.6)' }}
        >
          Save Contact
        </Button>
      </FormModal>
    </Overlay>,
    overlay
  );
};