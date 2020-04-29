import React, { useState, useEffect } from "react";
import { api } from "./api";
import { Redirect, useParams } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Box,
  TextField,
  Container,
  CssBaseline,
  Divider
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Details = ({ title, value }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Box p={4} mt={3}>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="h5">{title}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{value}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

let dummyUser = {
  email: "",
  firstname: "",
  lastname: "",
  phone: "",
  address: "",
  cardNumber: ""
};

const Home = ({ login, setLogin, verifiedUser, location }) => {
  const [transaction, setTransaction] = useState({
    completed: false,
    price: "fetching",
    phone: ""
  });
  const user = verifiedUser ? verifiedUser : dummyUser;
  // ? verifiedUser
  // : location && location.state
  // ? location.state.user
  // : {
  //     email: "",
  //     firstname: "",
  //     lastname: "",
  //     phone: "",
  //     address: "",
  //     cardNumber: ""
  //   };

  let { id } = useParams();
  id = id ? id : "";

  useEffect(() => {
    async function getTransaction() {
      if (id) {
        let response = await api.get(`/transaction/${id}`);
        setTransaction(() => response.data.transaction);
      }
    }
    getTransaction();
  }, []);

  async function logout() {
    await api.post("/logout", {});
    setLogin(false);
  }

  async function checkout() {
    let response = await api.post("/checkout", {
      transactionId: id
    });
    if (response.data.done) {
      window.location =
        response.data.transaction.redirectUrl +
        `?name=${user.firstname}&address=${user.address}&phone=${user.phone}&email=${user.email}`;
    }
  }

  if (id == "") {
    return <Redirect to="/dashboard" />;
  }

  if (!login) {
    console.log("login :>> ", login);
    return <Redirect to={`/${id}`} />;
  }
  return (
    <div>
      <AppBar position="static" style={{backgroundColor: "#fff"}}>
        <Toolbar>
          <img
            src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c2eb3c0d4edc_Fast-LogoBlack.svg")}
            alt=""
          />
          {/* <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: "auto" }}
            onClick={() => logout()}
          >
            Logout
          </Button> */}
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="xs" style={{ marginTop: "75px" }}>
        <CssBaseline />
        <div>
          <Grid container>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginRight: "auto", color: "#FF5A5F" }}
            >
              Checkout
            </Typography>
            <img
              src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c2eb3c0d4edc_Fast-LogoBlack.svg")}
              alt=""
            />
          </Grid>
          <form noValidate>
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
              value={user.email}
              autoFocus
              disabled
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
              value={user.phone}
              autoComplete="current-password"
              disabled
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
              value={user.address}
              autoComplete="current-password"
              disabled
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
                  value={user.firstname}
                  autoComplete="current-password"
                  disabled
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
                  value={user.lastname}
                  autoComplete="current-password"
                  disabled
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
                  value={user.cardNumber}
                  autoComplete="current-password"
                  disabled
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
                  value={user.exp}
                  autoComplete="current-password"
                  disabled
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
                  value={user.cvv}
                  autoComplete="current-password"
                  disabled
                />
              </Grid>
            </Grid>
            {id && !transaction.completed ? (
              <TextField
                variant="outlined"
                margin="dense"
                color="secondary"
                required
                fullWidth
                name="address"
                label="Payment"
                type="address"
                id="address"
                value={transaction.price}
                autoComplete="current-password"
                disabled
              />
            ) : (
              ""
            )}
            {id && !transaction.completed ? (
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#FF5A5F", color: "white" }}
                onClick={() => checkout()}
              >
                Checkout
              </Button>
            ) : (
              ""
            )}
          </form>
        </div>
      </Container>
      {/* {id && !transaction.completed ? (
        <>
          <Typography variant="h5" style={{ marginTop: "15px" }}>
            Payment: {transaction.price}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: "5px" }}
            onClick={() => checkout()}
          >
            Checkout
          </Button>
        </>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Home;
