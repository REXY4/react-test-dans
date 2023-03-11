import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ component, auth }) => {
  // Replace with your authentication logic
  if (!auth.isLogin) {
    return component;
  }
  return <Navigate to="/home" replace />;
};

const mapStateProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateProps, {})(PublicRoute);
