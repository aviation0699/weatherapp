 //const request = require('request')
 const geocode=  require('./utils/geocode')
 const forecast=  require('./utils/forecast')


// const request = require("request");
// const { callbackify } = require("util");

// //api key to fetch data using weatherstack
// const url='http://api.weatherstack.com/current?access_key=40b46c0a0e1e945727e9d08b727483a6&query=37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
//     }
// })

// integrating map box to get the city based on latitude and longitude
//const url__="https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1IjoiYXZpYXRpb24wNjk5IiwiYSI6ImNrcHNwYzI1dTBidnoyb25vMWNiZTM4NTkifQ.wnv11jyniwyQTHxupP2jaw"

/*
request function take 2 arguments one the url to fetch the data 
and other the function which is used to fetch the required data
// */
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })

 //console.log(data.current)
    // data.current for curent forecast information
    // .current varies from api's tp api's
    // in darksky it was data.currently

const address=(process.argv)
if (!address){
    console.log('provide address')
}
else{
    geocode(address[2],(error,{latitude,longitude,location}={})=>{
        if (error){
            return console.log(error)
        }
        else{
    
        forecast(latitude, longitude, (error, forecastdata) => {
        if (error){
            return console.log(error)
        }
        else{
            console.log(location)
            console.log(forecastdata)
        }
    
      })
    }
    })  

}
