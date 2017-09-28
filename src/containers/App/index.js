import React, { Component, PropTypes } from 'react';

// Import Components
import SearchBar from '../SearchBar';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="header-styles">
              <h1 className="pageTitle">Investorapp</h1>
            </div>

            <div className="col l4 m12 s12 left-side">
              <SearchBar/>
            </div>

            <div className="col l7 push-l1 m12 s12 right-side">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
