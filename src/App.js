import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from '../src/components/pages/Home/Home';
import TourOrder from '../src/components/pages/TourOrder/TourOrder';
import TourList from '../src/components/pages/TourList/TourList';
import AddTour from '../src/components/pages/AddTour/AddTour';
import Login from '../src/components/pages/Login/Login';
import Mytour from '../src/components/pages/MyTour/Mytour';
import Menubar from './components/shared/Menubar/Menubar';
import Footer from './components/shared/Footer/Footer';
import AuthProvider from "./components/context/AuthProvider";
import PrivateRoute from "./components/pages/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/tourorder/:orderKey">
              <TourOrder></TourOrder>
            </PrivateRoute>
            <Route path="/mytour">
              <Mytour></Mytour>
            </Route>
            <Route path="/tourlist">
              <TourList></TourList>
            </Route>
            <Route path="/addtour">
              <AddTour></AddTour>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
