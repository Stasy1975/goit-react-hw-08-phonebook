import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { NavLink } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import { ContainerReg } from './Register.styled';
import {
  Box,
  TextField,
  Button,
  Grid,
  Avatar,
  Typography,
} from '@mui/material';

const RegisterUser = () => {
  const dispatch = useDispatch();

  const handleSinghup = e => {
    e.preventDefault();
    const form = e.target;
    const {
      elements: { name, email, password },
    } = e.target;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <Box>
      <ContainerReg maxWidth="sm">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSinghup}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          >
            Name
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            Signup
          </Button>
          <Grid container justifyContent="flex-end">
            <NavLink to="/login">Already have an account? Sign in</NavLink>
          </Grid>
        </Box>
      </ContainerReg>
    </Box>
  );
};

export default RegisterUser;