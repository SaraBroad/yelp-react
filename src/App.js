import "./App.css";
import React from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar.js";
import RestaurantList from './Components/RestaurantList'
const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

class App extends React.Component {
  state = {
    foodEstablishments: [],
    selectedFoodEstablishment: null,
    isLoading: false,
    error: null
  };

  componentDidMount() {
      // if (this.state.foodEstablishments.length < 1) {
        this.onCategorySubmit('')
      // }
  }

  onCategorySubmit = async (term) => {
    console.log('term', term)
    const response = await axios.get(
      `${baseURL}/businesses/search?location=philadelphia&categories=${term}&limit=10`,
        {
        headers: {
          mode: 'no-cors',
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json",
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        params: {
          _limit: 10
        }
      }
    );
    console.log("response", response.data.businesses);
    this.setState({
      foodEstablishments: response.data.businesses
    })
    console.log('fe', this.state.foodEstablishments)
  };

  // onFoodEstablishmentSelect = (establishment) => {
  //   console.log("from the app", establishment)
  //   this.setState({ selectedFoodEstablishment: establishment })
  // }
  // transactions - delivery or pickup

  render() {
    return (
      <div className="ui container">
        <h4
          className="ui header" style={{ fontSize: "40px", textAlign: "center", marginTop: "16px" }}>
          COVID Food Finder
        </h4>
        <div>
          <SearchBar onFormSubmit={this.onCategorySubmit} />
        </div>
        <div>
         <RestaurantList foodEstablishments={this.state.foodEstablishments} />
        </div>
      </div>
    );
  }
}

export default App;
