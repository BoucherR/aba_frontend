import './App.css';

import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Axios from 'axios';

import LoginForm from './components/auth/LoginForm';
import NavDrawer from './components/navigation/NavDrawer';

import { Grid, Box } from "@mui/material"
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import PatientsDashboard from './components/patientsDashboard/PatientsDashboard';
import PatientDashboard from './components/patientDashboard/PatientDashboard';
import GraphingDashboard from './components/graphingDashboard/GraphingDashboard';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0b9c47',
    },
    secondary: {
      main: '#f5003b',
    },
    error: {
      main: '#f43636',
    },
    mainBackground: {
      main: '#ececec',
    },
    subBackground: {
      main: '#bfe3ce',
    },
  },
});

const BASE_URL = `https://aba-backend-golang.herokuapp.com`

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const signin = (credentials) => {
    Axios.post(`${BASE_URL}/login`, {
      email: credentials.email,
      password: credentials.password,
    })
      .then((result) => {
        if (result.status === 200) {
          setUser(result.data.user);
          setToken(result.data.token);
        }
        else {
          setUser(null);
        }
      })
      .catch((err) => {
        //TODO Fix this!
        console.log(err);
      })
  };

  const signout = () => {
    setUser(null);
    setToken(null);
  };

  return {
    user,
    token,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome, {auth.user.name}!
      <button
        onClick={() => {
          auth.signout();
          history.push("/")
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

let App = () => {
  return (
    <ProvideAuth>
      <Router>
        <ThemeProvider theme={theme}>
          <NavDrawer />
          <Box sx={{
            paddingLeft: '240px',
            paddingTop: '65px',
            backgroundColor: '#ececec',
            height: '150vh'
          }}>
            <AuthButton />
            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/public">
                <PublicPage />
              </Route>
              <Route path="/login">
                {/* <LoginPage /> */}
                <Grid container justifyContent="center">
                  <Grid item xs={4}>
                    <LoginForm useAuth={useAuth} />
                  </Grid>
                </Grid>
              </Route>
              <Route path="/patients">
                <PatientsDashboard />
              </Route>
              <Route path="/patient">
                <PatientDashboard />
              </Route>
              <Route path="/graphing">
                <GraphingDashboard />
              </Route>
              {/* <Route path="/choiceBoard">
                <ChoiceBoardDashboard />
              </Route> */}
              <PrivateRoute path="/protected">
                <ProtectedPage />
              </PrivateRoute>
            </Switch>
          </Box>
        </ThemeProvider>
      </Router>
    </ProvideAuth>
  );
}


export default App;
