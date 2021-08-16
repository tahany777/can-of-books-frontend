import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './components/Profile';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header auth ={this.props.auth0}/>
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ?  <BestBooks/> : <Login/>}
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated ? <Profile /> : <></>}
               
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
