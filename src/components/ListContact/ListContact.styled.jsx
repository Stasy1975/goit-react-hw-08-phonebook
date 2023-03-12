import { styled } from '@mui/material/styles';
import { Button, Typography, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

export const ItemContact = styled(Grid2)`
  border-radius: 10px;
  padding: 10px 20px;
  min-width: 100px;
  max-width: 250px;
  flex-direction: column;
  box-shadow: inset 0 4px 4px rgba(0,0,0,0.1),
             4px 4px 16px rgba(0,0,0,0.3);
`

export const TypoContact = styled(Typography)`
  display: flex; 
  align-items: center;
`

export const BtnEdit = styled(Button)`
  padding: 0;
`

export const BtnDelete = styled(Button)`
  padding: 0;
  margin-left: 0;
`

export const BoxBtn = styled(Box)`
  display: flex;
  justify-content: space-between;
`

export const BoxList = styled(Box)`
  padding: 0;
`