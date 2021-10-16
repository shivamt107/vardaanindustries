import logo from './logo.svg';
import './App.css';
 
import React, { Fragment, Suspense, lazy } from "react"
// import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/home/home"
import Headers from "./components/headers/headers"
import Railway from "./components/workover/railway"
import Automobiles from "./components/workover/Automobiles"
import Cctv from "./components/workover/Cctv"
import Medical from "./components/workover/Medical"

// import theme from "./theme"

function App() {
  return (
    <BrowserRouter>
    {/* <MuiThemeProvider theme={theme}> */}
    <div>
      <Headers/>
          <Switch>
          <Route
                  path={"/home"}
                  exact
                  component={Home}
                ></Route>
                   <Route
                  path={"/"}
                  exact
                  component={Home}
                ></Route>
                 <Route
                  path={"/railways"}
                  exact
                  component={Railway}
                ></Route>
                <Route
                  path={"/automobiles"}
                  exact
                  component={Automobiles}
                ></Route>
                <Route
                  path={"/cctv"}
                  exact
                  component={Cctv}
                ></Route>
                <Route
                  path={"/medical"}
                  exact
                  component={Medical}
                ></Route>
          </Switch>
          </div>
    {/* </MuiThemeProvider> */}
  </BrowserRouter>
  );
}
export default App;
