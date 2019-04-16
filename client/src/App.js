import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

class App extends Component {
  state = {
    searchTerm: "title",
    title: "",
    author: "",
    searchResult: {},
    searched: false,
    saved: [],
    bookIDs: [],

  }
  componentDidMount() {
    this.getSavedBooks()
  }

  getSavedBooks = () => {

  }

  render() {
    return (
      <Router>

        <Header />
        <Switch>
          <Route exact path="/" render={props => (
            <div className="container">
            <SearchBar 
            changeSearchTerm={this.changeSearchTerm}
            title={this.state.title}
            author={this.state.author}
            handleInputChange={this.handleInputChange}
            searchTerm={this.state.searchTerm}
            search={this.search}
            />
            <SearchResultDisplay
            searchResult={this.state.searchResult}
            searched={this.state.search}
            save={this.save}
            bookIDs={this.state.bookIDs}
            />

            </div>
          )} />
          <Router exact path="/saved" render={props => (
            <div className="container">
            <SaveResultArea
            saved={this.state.saved}
            getSavedBooks={this.getSavedBooks}
            changeRead={this.changeRead}
            deleteBook={this.deleteBook}
            />
            </div>
          )} />

          <Route component={errorPage} />
        </Switch>
       
      </Router>
      
    );
  }
}



export default App;
