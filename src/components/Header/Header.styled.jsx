import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

import Grid2 from '@mui/material/Unstable_Grid2';
import {
  Avatar,
  Box,
  Button,
  Typography
} from '@mui/material';

export const HeaderBox = styled(Box)`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

`;

export const MyBox = styled(Box)`
  padding-top: 15px;
  padding-bottom: 15px;
  list-style: none;
  padding-left: 0;
`;

export const MyTypography = styled(Typography)`
  padding: 10px 15px;
  border-radius: 3px;
  color: #3b0585;
  transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background-color: rgba(120, 120, 120, 0.1);
  }
  &:active {
    color: #850541;
  }
`

export const List = styled(Grid2)`
  list-style: none;
  align-items: center;
  justify-content: center;
  padding-left: 0;
`;

export const Items = styled(Grid2)`
  margin-right: 25px;
  &:last-child {
    margin-right: 0;
  }
`;

export const MyAvatar = styled(Avatar)`
  background-color: #6f1cff;
  margin-right: 25px;
`;

export const MyNavLink = styled(NavLink)`
  text-decoration: none;  
`;

export const RegisterBtn = styled(Button)`
background-color: rgba(220, 220, 220, 0.5);`