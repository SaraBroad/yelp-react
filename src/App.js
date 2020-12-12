import "./App.css";
import React from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar.js";
// import yelp from './api/yelp'
const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";
const locationSearched = "Philadelphia";

class App extends React.Component {
  state = {
    foodEstablishment: [],
    selectedFoodEstablishment: null,
  };

  componentDidMount() {
    // this.getSelectedRestaurants('Philadelphia')
  }

  onSearchSubmit = async (location) => {
    const response = await axios.get(
      `${baseURL}/businesses/search?location=philadelphia`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        params: {

        }
      }
    );
    console.log("response", response.data.businesses[0]);
  };

  // transactions - delivery or pickup

  render() {
    return (
      <div className="ui container">
        <h4
          className="ui header"
          style={{ fontSize: "40px", textAlign: "center", marginTop: "16px" }}>
          COVID Food Finder
        </h4>

        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
