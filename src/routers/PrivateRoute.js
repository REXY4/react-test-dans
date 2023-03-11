import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component, auth }) => {
  // Replace with your authentication logic
  if (auth.isLogin) {
    return component;
  }
  return <Navigate to="/" replace />;
};

const mapStateProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateProps, {})(PrivateRoute);
