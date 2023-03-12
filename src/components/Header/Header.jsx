import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
import { logOut } from '../../redux/operations';
import { selectIsLoggedIn, selectUserData } from 'redux/selectors';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import '@fontsource/roboto/500.css';
import { Button, Typography } from '@mui/material';

import {
  MyAvatar,
  MyBox,
  List,
  MyNavLink,
  MyTypography,
  Items,
  HeaderBox,
  RegisterBtn,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const nameUser = useSelector(selectUserData);
  // const location = useLocation();
  // const [bgImage, setBgImage] = useState(null);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  // useEffect(() => {
  //   if (location.pathname !== '/') {
  //     setBgImage(authBg);
  //   } else setBgImage(mainBg);
  // }, [location]);

  return (
    <HeaderBox
      id="header"
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      // }}
    >
      <MyBox>
        {!isLoggedIn ? (
          <List component="ul" container direction="row">
            <Items component="li"></Items>
            <Items component="li">
              <MyNavLink to="/register">
                <RegisterBtn variant="outlined">Register</RegisterBtn>
              </MyNavLink>
            </Items>
            <Items component="li">
              <MyNavLink to="/login">
                <Button variant="contained">Login In</Button>
              </MyNavLink>
            </Items>
          </List>
        ) : (
          <List component="ul" container direction="row">
            <Items component="li"></Items>
            <Items component="li">
              <MyNavLink to="/contacts">
                <MyTypography variant="button">Phonebook</MyTypography>
              </MyNavLink>
            </Items>
            <Items component="li">
              <Typography variant="subtitle1">
                Welcome {nameUser.name}
              </Typography>
            </Items>
            <MyAvatar>
              <FaceRetouchingNaturalIcon />
            </MyAvatar>
            <Items component="li">
              <Button
                type="button"
                onClick={handleLogOut}
                variant="outlined"
                color="secondary"
              >
                <LogoutIcon />
                Log Out
              </Button>
            </Items>
          </List>
        )}
      </MyBox>
      <Outlet />
    </HeaderBox>
  );
};

export default Header;