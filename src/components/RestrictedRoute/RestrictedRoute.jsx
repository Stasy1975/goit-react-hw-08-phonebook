import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ redirectTo = '/', component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;