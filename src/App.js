import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import NaviGation from "./pages/Navigation/NaviGation";
import Home from "./pages/Home/Home";
import Notfound from "./pages/Notfound/Notfound";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Login/Login";
import MyPacages from "./pages/Mypackages/MyPacages";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyDestinations from "./pages/Mydestination/MyDestinations";
import AddSpot from "./pages/AddSpot/AddSpot";
import DashBoared from "./pages/DASHbOARD/DashBoared";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NaviGation></NaviGation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/destinations">
              <MyDestinations></MyDestinations>
            </Route>
            <Route path="/addspot">
              <AddSpot></AddSpot>
            </Route>
            <Route path="/dashboared">
              <DashBoared></DashBoared>
            </Route>
            <PrivateRoute path="/packeges/:id">
              <MyPacages></MyPacages>
            </PrivateRoute>

            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
