import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { connect } from 'react-redux';
import { logout, checkUser } from './actions/auth';
import Navbars from './components/Navbars';
import router from './routers';

function App({ auth, logout, checkUser, user }) {
  useEffect(() => {
    if (auth.isLogin) {
      checkUser(auth.token);
    }
  }, []);
  return (
    <div>
      <Navbars isLogin={auth && auth.isLogin} name={user && user.name} logout={logout} />
      <RouterProvider router={router} />
    </div>
  );
}
const mapStateProps = (state) => {
  return {
    auth: state.auth,
    user: state.auth.user
  };
};
export default connect(mapStateProps, { logout, checkUser })(App);
