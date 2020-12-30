import React, {useState} from 'react';
import { auth } from "./firebase";
import "./Login.css"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link, useHistory} from "react-router-dom";

function Login() {
  const classes = useStyles();

  const history = useHistory();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const login = event => {
    event.preventDefault(); // This stops the refresh
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      // Here we can redirect the user to homepage
      history.push('/');
    })
    .catch((error) => alert(error.message))

  }

  const register = event => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        // Here we can redirect the user to homepage
        history.push('/');
      })
      .catch((error) => alert(error.message));

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link to="/">
          <img
            className="login_logo"
            src="data:image/png;base64,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"
            alt=""
          />
        </Link>

      <div className="login_container">
          <h1 className="login_title">Sign in</h1>
          <form className={classes.form} noValidate>
            <TextField
              value={email}
              onChange={event => setEmail(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
            />
            <TextField
              value={password}
              onChange = {(event) => setPassword(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            />

            <Button
              onClick={login}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
          <Button
            onClick={register}
            fullWidth
            variant="contained"
            >
            Create an account
          </Button>
        </div>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default Login;
