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
import Divider from "@material-ui/core/Divider";

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
    let response = await api.post("/register", {
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
      let response = await api.get("/verify");
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
        <Grid container>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginRight: "auto", color: "#FF5A5F" }}
          >
            Signup
          </Typography>
          <img
            src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c2eb3c0d4edc_Fast-LogoBlack.svg")}
            alt=""
          />
        </Grid>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            color="secondary"
            margin="dense"
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
            margin="dense"
            color="secondary"
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
            margin="dense"
            color="secondary"
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
            <Grid item xs={6} style={{ paddingRight: "5px" }}>
              <TextField
                variant="outlined"
                margin="dense"
                color="secondary"
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
            <Grid item xs={6} style={{ paddingLeft: "2px" }}>
              <TextField
                variant="outlined"
                margin="dense"
                color="secondary"
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
          <Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
          <Grid container>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                color="secondary"
                fullWidth
                name="cardNumber"
                label="Card Number"
                type="cardNumber"
                id="cardNumber"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                color="secondary"
                fullWidth
                name="exp"
                label="Exp"
                type="exp"
                id="exp"
                value={exp}
                onChange={e => setExp(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                color="secondary"
                fullWidth
                name="cvv"
                label="Cvv"
                type="cvv"
                id="cvv"
                value={cvv}
                onChange={e => setCvv(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#FF5A5F", color: "white" }}
            className={classes.submit}
          >
            Request Otp
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/login"  style={{ color: "#FF5A5F" }}>
                {"Have an account? Login"}
              </Link>
            </Grid>
          </Grid>
          <Grid container style={{ color: "#FF5A5F" }}>
            <Grid item>{message}</Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
