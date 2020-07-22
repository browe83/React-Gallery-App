import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cats from "./containers/Cats";
import Birds from "./containers/Birds";
import Dogs from "./containers/Dogs";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import Search from "./containers/Search";
import { performSearch } from "./services";
import Home from "./containers/Home";
import FourOhFour from "./containers/FourOhFour";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      cats: [],
      dogs: [],
      birds: [],
      search: [],
      loading: false,
    };
  }
  // Preloads state for cats, dogs and birds.
  async componentDidMount() {
    const cats = await performSearch("cats");
    const dogs = await performSearch("dogs");
    const birds = await performSearch("birds");

    this.setState({
      cats: cats.photos.photo,
      dogs: dogs.photos.photo,
      birds: birds.photos.photo,
    });
  }
  //Change handler for the search input field.
  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  //Returns search query data from user input
  search = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    performSearch(this.state.searchText).then((data) => {
      this.setState({
        loading: false,
        search: data.photos.photo,
      });
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm
            handleSubmit={this.search}
            onSearchChange={this.onSearchChange}
            searchText={this.state.searchText}
          />
          <Nav path={window.location.pathname} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cats">
              <Cats photos={this.state.cats} />
            </Route>
            <Route exact path="/dogs">
              <Dogs photos={this.state.dogs} />
            </Route>
            <Route exact path="/birds">
              <Birds photos={this.state.birds} />
            </Route>
            <Route exact path="/search">
              <Search photos={this.state.search} loading={this.state.loading} />
            </Route>
            <Route exact path="*">
              <FourOhFour />
              <Redirect from="*" to="/404" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
