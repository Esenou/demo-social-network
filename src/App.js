import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { Route, BrowserRouter, withRouter } from 'react-router-dom';


import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialize) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>

        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer)}/>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
          <Route path='/users' render={withSuspense(UsersContainer)}/>
          <Route path='/login' render={() => <Login />}></Route>
        </div>




      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialize: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

let SamuraiJsApp = (props) => {

  return <BrowserRouter>

    <Provider store={store}>
      <AppContainer />
    </Provider>

  </BrowserRouter>
}

export default SamuraiJsApp