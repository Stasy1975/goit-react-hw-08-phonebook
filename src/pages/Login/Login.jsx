import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { NavLink } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import {
  Box,
  TextField,
  Button,
  Grid,
  Avatar,
  Typography,
} from '@mui/material';
import { LoginBox } from './Login.styled';

const LoginUser = () => {
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const {
      elements: { email, password },
    } = e.target;
    if (email.value === '' || password.value === '') {
      return;
    }
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <LoginBox>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login in
      </Typography>
      <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        >
          Email
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        >
          Password
        </TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login In
        </Button>
        <Grid container sx={{ justifyContent: 'center' }}>
          <NavLink to="/register">
            {"Don't have an account? Register Up"}
          </NavLink>
        </Grid>
      </Box>
    </LoginBox>
  );
};

export default LoginUser;