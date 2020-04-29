import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Dashboard({login}) {

  if(!login){
    return <Redirect to="/login" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "50px" }}>
          <img
            src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c2eb3c0d4edc_Fast-LogoBlack.svg")}
            alt=""
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            align="center"
            style={{ marginTop: "50px", fontWeight: "900", color: "#FF5A5F" }}
          >
            1-Click Checkout Enabled
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            align="center"
            style={{ marginTop: "50px" }}
          >
            You're All Ready To Go To Close! We'll Notify You When You Can
            Checkout With 1-Click
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "75px" }}>
          <a
            href="http://shop.letsdooit.in"
            style={{ textDecorationLine: "none" }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                color: "#FF5A5F",
                backgroundColor: "white",
                padding: "20px"
              }}
            >
              Buy On Lets Do It
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "50px" }}>
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#FF5A5F",
                color: "white",
                padding: "20px"
              }}
            >
              Go To Theclosecompany.com
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
