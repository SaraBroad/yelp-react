import axios from "axios";
import React from "react";
import yelp from './api/yelp'
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const API_KEY = process.env.API_KEY
const YELP_URL = proxyurl + "https://api.yelp.com/v3/businesses";
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
      Authorization: `Bearer ${API_KEY}`,
    }
    })
    console.log('response', response.data.businesses)
  };


  render() {
    return <div>APP</div>;
  }
}

export default App;
