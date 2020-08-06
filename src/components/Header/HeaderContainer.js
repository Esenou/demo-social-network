
import React from 'react';
import *as axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, logout } from '../../redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {

  
  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
export default connect(mapStateToProps, {logout})(HeaderContainer)
