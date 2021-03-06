import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Success from "./Success";
import Failure from "./Failure";
import Login from "./Login";
import Signup from "./Signup";
import Otp from "./Otp";
import { api } from "./api";
import { Redirect } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";

function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  useEffect(() => {
    setLoading(true);
    async function verify() {
      let response = await api.get("/verify");
      console.log("response :>> ", response);
      if (response.data.verify) {
        console.log("here");
        setUser(response.data.user);
        setLogin(true);
      }
      setLoading(false);
    }
    verify();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          paddingTop: "20%",
          height: "100%",
          fontSize: "200px",
          textAlign: "center"
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/success" exact render={proppropsHistory => <Success />} />
        <Route path="/failure" exact render={proppropsHistory => <Failure />} />
        <Route
          path="/login/:id?"
          exact
          render={proppropsHistory => (
            <Login setLogin={setLogin} login={login} />
          )}
        />
        <Route
          path="/otp/:id?"
          exact
          render={proppropsHistory => (
            <Otp
              setLogin={setLogin}
              login={login}
              {...proppropsHistory}
              setUser={setUser}
            />
          )}
        />
        <Route
          path="/signup/:id?"
          exact
          render={proppropsHistory => (
            <Signup setLogin={setLogin} login={login} />
          )}
        />
        <Route
          path="/dashboard/:id?"
          exact
          render={proppropsHistory => (
            <Dashboard setLogin={setLogin} login={login} />
          )}
        />
        <Route
          path="/home/:id?"
          exact
          render={proppropsHistory => (
            <Home login={login} verifiedUser={user} setLogin={setLogin} />
          )}
        />

        <Route
          path="/:id?"
          exact
          render={proppropsHistory => (
            <HomePage setLogin={setLogin} login={login} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
