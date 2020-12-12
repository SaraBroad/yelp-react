import axios from 'axios'
let API_KEY = process.env.API_KEY

// REST
export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
})