import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;