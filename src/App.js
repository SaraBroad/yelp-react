import axios from "axios";
import React from "react";
// import yelp from './api/yelp'
const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3"
const locationSearched = "Philadelphia";

class App extends React.Component {
 
  componentDidMount() {
    this.getSelectedRestaurants('Philadelphia')
  }

  getSelectedRestaurants = async (location) => {
    const response = await axios.get(`${baseURL}/businesses/search?location=philadelphia`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    }
    })
    console.log('response', response.data.businesses[0])
  };


  render() {
    return <div>APP</div>;
  }
}

export default App;
