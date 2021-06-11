const request = require('request')

//api key to fetch data
const url='http://api.weatherstack.com/current?access_key=40b46c0a0e1e945727e9d08b727483a6&query=37.8267,-122.4233'

/*
request function take 2 arguments one the url to fetch the data 
and other the function which is used to fetch the required data
*/
request({url:url,json:true},(error,response)=>{
    const data = JSON.parse(response.body.current)
    //console.log(data.current)
    //data.current for curent forecast information
    //.current varies from api's tp api's
    // in darksky it was data.currently
})