import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect, useParams } from "react-router-dom";
import { api } from "./api";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

let globalUser = {
  email: "",
  firstname: "",
  lastname: "",
  phone: "",
  address: "",
  cardNumber: ""
};

export default function Login({ setLogin, login, location, setUser }) {
  const classes = useStyles();
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [verify, setVerify] = useState(false);
  // const [user, setUser] = useState(globalUser);

  const handleSubmit = async e => {
    e.preventDefault();
    e.persist();
    let response = await api.post(
      `http://localhost:5000/${location.state.route}`,
      {
        phone: location.state.phone,
        otp
      }
    );
    console.log("response :>> ", response);
    if (response.data.verified) {
      setUser(() => ({ ...response.data.user }));
      setLogin(true);
      setVerify(true);
    }
    setMessage(response.data.message);
  };

  let { id } = useParams();
  id = id ? id : "";

  if (login || verify) {
    return (
      <Redirect
        to={{
          pathname: `/${id}`,
          state: {
            // user
          }
        }}
      />
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          OTP
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          noValidate
          autoComplete={false}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="otp"
            label="Otp"
            name="otp"
            autoComplete="otp"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Otp
          </Button>
          {/* <Grid container>
            <Grid item>
              <Link to="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
          <Grid container>
            <Grid item>{message}</Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
