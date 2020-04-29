import React, { useState, useEffect } from "react";
import { api } from "./api";
import { Redirect, useParams } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
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

  if (!login) {
    console.log("login :>> ", login);
    return <Redirect to={`/${id}`} />;
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Close</Typography>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: "auto" }}
            onClick={() => logout()}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12}></Grid>
      </Grid>
      <Details title="Email" value={user.email} />
      <Grid container>
        <Grid item xs={4} style={{ marginRight: "70px" }}>
          <Details title="Firstname" value={user.firstname} />
        </Grid>
        <Grid item xs={4}>
          <Details title="Lastname" value={user.lastname} />
        </Grid>
      </Grid>
      <Details title="Phone" value={user.phone} />
      <Details title="Address" value={user.address} />
      <Details title="Card Number" value={user.cardNumber} />
      {id && !transaction.completed ? (
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
      )}
    </div>
  );
};

export default Home;
