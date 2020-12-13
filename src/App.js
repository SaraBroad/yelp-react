import "./App.css";
import React from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar.js";
import RestaurantList from "./Components/RestaurantList";
import RestaurantDetail from './Components/RestaurantDetail'
const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

class App extends React.Component {
  state = {
    foodEstablishments: [],
    selectedFoodEstablishment: null,
    selectedFoodEstablishmentId: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.onCategorySubmit("");
  }

  onCategorySubmit = async (term) => {
    console.log("term", term);
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
    console.log("response", response.data.businesses);
    this.setState({
      foodEstablishments: response.data.businesses,
      // selectedFoodEstablishment: response.data.businesses
    });
    console.log("fe", this.state.foodEstablishments);
  };

  onFoodEstablishmentSelect = (foodEstablishment) => {
    // console.log("From the app", foodEstablishment);
    this.setState({ 
      selectedFoodEstablishment: foodEstablishment,
      selectedFoodEstablishmentId: foodEstablishment.id
    });
    console.log('selectedFoodId', this.state.selectedFoodEstablishmentId )
    console.log('selectedFood', this.state.selectedFoodEstablishment )
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
                foodEstablishments={this.state.foodEstablishments}
                
              />
            </div>
            <div className="eight wide column">
              {/* Other Part */}
              <RestaurantDetail 
                foodEstablishment={this.state.selectedFoodEstablishment}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
