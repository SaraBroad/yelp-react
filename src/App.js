import "./App.css";
import React from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar.js";
import RestaurantList from "./Components/RestaurantList";
import RestaurantDetail from './Components/RestaurantDetail'
export const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

class App extends React.Component {
  state = {
    foodEstablishments: [],
    selectedFoodEstablishment: null,
    selectedFoodEstablishmentId: null,
    isLoading: false,
    error: null,
    comments: []
  };

  componentDidMount() {
    this.onCategorySubmit("");
  }

  onCategorySubmit = async (term) => {
    const response = await axios.get(
      `${baseURL}/businesses/search?location=philadelphia&categories=${term}&limit=10`,
      {
        headers: {
          mode: "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        }
      }
    );
    this.setState({
      foodEstablishments: response.data.businesses,
    });
  };

  onFoodEstablishmentSelect = (foodEstablishment) => {
    axios.get(
      `${baseURL}/businesses/${foodEstablishment.id}/reviews`,
      {
        headers: {
          mode: "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        }
      })
      .then(res => {
        this.setState({
          selectedFoodEstablishment: foodEstablishment,
          comments: res.data.reviews
        })
      })
  };

  render() {
    return (
      <div className="ui container">
        <h4
          className="ui header"
          style={{ fontSize: "40px", textAlign: "center", marginTop: "16px" }}
        >
          COVID Food Finder
        </h4>

        <div>
          <SearchBar onFormSubmit={this.onCategorySubmit} />
        </div>
        <div className="ui grid">
          <div className="ui row">
            <div className="eight wide column">
              <RestaurantList
                onFoodEstablishmentSelect={this.onFoodEstablishmentSelect}
                // getCommentsById={this.getCommentsById}
                foodEstablishments={this.state.foodEstablishments}
                
              />
            </div>
            <div className="eight wide column">
              <RestaurantDetail 
                foodEstablishment={this.state.selectedFoodEstablishment}
                comments={this.state.comments}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
