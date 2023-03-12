import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const ContactBox = styled(Container)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const ListSearch = styled(Grid2)`
  display: flex;
  flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;