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

export default function SignIn({ login }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [verify, setVerify] = useState(false);

  let { id } = useParams();
  id = id ? id : "";

  const handleSubmit = async e => {
    e.preventDefault();
    e.persist();
    let response = await axios.post("http://localhost:5000/register", {
      email,
      phone,
      address,
      firstname,
      lastname,
      cardNumber,
      exp,
      cvv
    });
    console.log("response :>> ", response);
    if (response.data.done) {
      setRedirect(true);
    }
    setMessage(response.data.message);
  };

  useEffect(() => {
    async function verification() {
      let response = await axios.get("http://localhost:5000/verify");
      if (response.data.done) {
        setVerify(true);
      }
    }
    verification();
  }, []);

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: `/otp/${id}`,
          state: {
            phone,
            route: "signup-otp"
          }
        }}
      />
    );
  }

  if (login || verify) {
    return <Redirect to={`/home/${id}`} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Signup
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone"
            type="phone"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="address"
            id="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            autoComplete="current-password"
          />
          <Grid container justify="space-between">
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                name="firstname"
                label="Firstname"
                type="firstname"
                id="firstname"
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                name="lastname"
                label="Lastname"
                type="lastname"
                id="lastname"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cardNumber"
            label="Card Number"
            type="cardNumber"
            id="cardNumber"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="exp"
            label="Exp"
            type="exp"
            id="exp"
            value={exp}
            onChange={e => setExp(e.target.value)}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cvv"
            label="Cvv"
            type="cvv"
            id="cvv"
            value={cvv}
            onChange={e => setCvv(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Request Otp
          </Button>
          <Grid container>
            <Grid item>
              <Link to="login" variant="body2">
                {"Have an account? Login"}
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>{message}</Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
