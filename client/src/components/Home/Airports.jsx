const axios = require('axios')

const results = [];

const getAirports = (city) => {

  // Open Cage API
  const apiKEY = "115ef021ec104f5ea2b5e03c3f5cba0a";
  const place = city;

  // Amadeus API
  const option={
    headers:{
      'Authorization':"Bearer 3rGdtywc3QcvfQaLPa64D2awunXS",
      'Content-Type': 'application/json'
    }
  }

  return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${apiKEY}`)
    .then(data => {
      // return data.data
      const latitude = data.data.results[0].bounds.northeast.lat;
      const longitude = data.data.results[0].bounds.northeast.lng;
      // console.log('lat', latitude)
      // console.log('lng', longitude)
      return axios.get(`https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}&radius=500&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=relevance`,
      option)
    })
    .then((data) => {
      console.log('data', data.data)
      // return data.data
      // results.push(data)
    })
    .catch((error) => {
      console.log('ERROR', error)
  })
}

getAirports('San Francisco')