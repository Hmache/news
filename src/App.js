import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/HeaderComponent/Header';
import HomePage from './components/pages/HomePage';
import CategoryPage from './components/pages/CategoryPage';
import ArticleDetailsPage from './components/pages/ArticleDetailsPage';

import './assets/css/main.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/category/:category" component={ CategoryPage }/>
          <Route path="/article/:id" component={ ArticleDetailsPage }/>
        </div>
      </Router>
    );
  }
}

export default App;
