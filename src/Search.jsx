import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
  }
  state = {
    val: "",
    searchVal: [],
    showRes: false
  };

  componentDidMount() {
    this.mounted = true;
  }

  handleChange = e => {
    this.setState({ val: e.target.value });
    if (e.target.value !== "")
      fetch(`
    https://api.themoviedb.org/3/search/multi?api_key=17117ab9c18276d48d8634390c025df4&language=en-US&query=${
      e.target.value
    }&page=1&include_adult=false`)
        .then(r => r.json())
        .then(data => {
          if (this.mounted)
            this.setState({ searchVal: data.results, showRes: true });
        })
        .catch(err => console.log(err));
    else if (e.target.value === "") this.setState({ showRes: false });
  };

  closeRes = () => {
    this.setState({ showRes: false });
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { val, searchVal, showRes } = this.state;

    const moviesList = searchVal.length
      ? searchVal.map(movie => {
          return (
           <>
           {movie.media_type==="movie" ?
           <li key={movie.id}>
           <Link to={"/" + movie.id} onClick={this.closeRes}>
             {/* {movie.media_type==="tv" ? movie.name : movie.title} */}
             {movie.title}<><i  style={{color:"gray",float:"right"}}>[{new Date(movie.release_date).getFullYear()}]</i></>
           </Link>
          </li>
          :
          <li key={movie.id}>
          <Link to={"/tv/" + movie.id} onClick={this.closeRes}>
            {/* {movie.media_type==="tv" ? movie.name : movie.title} */}
            {movie.name}<><i  style={{color:"gray",float:"right"}}>[in TV Shows]</i></>
          </Link>
         </li>
            } 
            </>
          );
        })
      : null;

    return (
      <React.Fragment>
        <input
          type="text"
          name="searchVal"
          onChange={this.handleChange}
          className="search-input"
          placeholder="Search for movies/tvshows..."
          value={val} 
        />
        
        {showRes && (
          <div className="search-values">
            <ul>{moviesList}</ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Search;