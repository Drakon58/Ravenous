import React from 'react';
import logo from '../../logo.svg';
import '../../styling/sass/components/app.scss';
import { SearchBar } from '../SearchBar/SearchBar';
import { BusinessList } from '../BusinessList/BusinessList';
import { Business } from '../Business/Business';
import { Yelp } from '../../util/Yelp';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp = (term, location, searchType) => {
    console.log("Searching yelp with " + term + ", " + location + ", " + searchType);
    var yelpResults = Yelp.search(term, location, searchType).then(businesses => {
      this.setState({
        businesses: businesses
      })
    });
    console.log("From app search func: ", yelpResults)

  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
