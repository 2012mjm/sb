import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import configStore from "./lib/configureStore";

import Header from "./components/widgets/Header/Header";
import Footer from "./components/widgets/Footer/Footer";

import MainScreen from "./components/Main/MainScreen";
import SearchScreen from "./components/Search/SearchScreen";
import BookScreen from "./components/Book/BookScreen";

class App extends Component {
  constructor(props) {
    super(props);
    const { store, history } = configStore();
    this.state = {
      store: store,
      history: history
    };
  }
  render() {
    const { history, store } = this.state;
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="main">
            <Header />
            <Switch>
              <Route path="/" exact component={MainScreen} />
              <Route path="/search" component={SearchScreen} />
              <Route path="/book/:id/:title" component={BookScreen} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
