import React from 'react';
import './searchBar.scss';

const sortByOptions = {
  'Best Matched' : 'best_match',
  'Highest Rated' : 'rating',
  'Most Reviewed' : 'review_count'
}

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: sortByOptions['Best Matched'],
    };
    this.search = this.search.bind(this);
    this.getSortByClass = this.getSortByClass.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.submitSearchByReturn = this.submitSearchByReturn.bind(this);
  }

  search(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    // fetch("https://www.swapi.co/api/people/?search=chewbacca")
    // .then(res => res.json())
    // .then(res => console.log(res.results[0]))
    if (e) {
      e.preventDefault();
    }
  }

  handleSortClick(sortType) {
    this.setState({
      sortBy: sortType
    });
    this.search();
  }

  handleTermChange(e) {
    let value = e.target.value;
    this.setState({
      term: value
    });
  }

  handleLocationChange(e) {
    let value = e.target.value;
    this.setState({
      location: value
    });
  }

  getSortByClass(sortType){
    if (sortByOptions[sortType] === this.state.sortBy) {
      return 'active';
    } else {
      return '';
    }
  }

  submitSearchByReturn(e){
    if(e.key === "Enter") {
      this.search()
    }
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortType => {
      let sortByOption = sortByOptions[sortType];
      return <li key={sortType} onClick={this.handleSortClick.bind(this, sortByOption)} className={this.getSortByClass(sortType)}>{sortType}</li>
    });
  }

  render() {

    return(
      <div className="SearchBar">
      <div className="SearchBar-sort-options">
      <ul>
      {this.renderSortByOptions()}
      </ul>
      </div>
      <div className="SearchBar-fields">
      <input placeholder="Search Businesses" onChange={this.handleTermChange} onKeyDown={this.submitSearchByReturn} />
      <input placeholder="Where?" onChange={this.handleLocationChange}  onKeyDown={this.submitSearchByReturn}/>
      </div>
      <div className="SearchBar-submit" onClick={this.search}>
      <a>Let's Go</a>
      </div>
      </div>
    );
  }
}
