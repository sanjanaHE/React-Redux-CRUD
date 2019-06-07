import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AddUser from "./App";
import Users from "./components/Users";
import UpdateUser from "./components/UpdateUser";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/store";
import { HashRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="">
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Users} /> */}
          <Route exact path="/users" component={Users} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/usersUpdate/:id" component={UpdateUser} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
