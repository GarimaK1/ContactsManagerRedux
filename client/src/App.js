import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import setAuthToken from './utils/setAuthToken';
import Container from 'react-bootstrap/Container';
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Welcome from "./components/pages/Welcome";
import Alerts from './components/layout/Alerts';
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/authActions';

console.log('Above app.js');
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Provider store={store}>
      <Router>

        <Navbar />
        <Container fluid style={{ width: '70%', marginTop: '0.75rem' }}>
          <Alerts />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <PrivateRoute exact path="/app" component={Home} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Container>

      </Router>
    </Provider>
  );
}

export default App;
