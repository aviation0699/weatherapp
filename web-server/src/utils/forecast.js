const request = require('request')


const forecast = (latitude,longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=40b46c0a0e1e945727e9d08b727483a6&query='+longitude+','+latitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, (response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out."))
        }   
        })
    
    }
 

module.exports=forecast