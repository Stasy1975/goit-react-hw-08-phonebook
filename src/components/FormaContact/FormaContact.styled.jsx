
import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

export const BtnAddContact = styled(Button)`
  margin-top: 16px;
  width: 100%;
  border-radius: 5%;
  background-color: rgba(232, 173, 255, 0.2);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1),
             4px 4px 16px rgba(0,0,0,0.3);
  &:hover {
    background-color: rgba(230, 230, 230, 0.5);
  }
`

export const FormField = styled(TextField)`
  margin-top: 16px;
  background-color: rgba(232, 173, 255, 0.2);
`