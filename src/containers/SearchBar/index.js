import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './actions';

class SearchBar extends Component {
  onClick = () => {
    const term = this.refs.searchInput.value;
    if (!!term.length) {
        this.props.search(term);
    }
  }

  render() {
    return (
      <div>
        <h4 className="finder-title">Find a Stock</h4>
        <div className="text-center">
          <input
            placeholder="Enter a stock symbol..."
            className="input-bar stock"
            ref="searchInput" />
          <button
            onClick={this.onClick}
            className="lookup-btn"
            >Lookup
          </button>
        </div>
      </div>
    );
  }
}

SearchBar.PropTypes = {
  search: PropTypes.func.isRequired
}

export default SearchBar;
