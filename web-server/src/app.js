const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public/')

app.use(express.static(publicDirectoryPath))   /// Setup static directory to serve


app.set('view engine','hbs') // Setup handlebars engine and views location


app.get('',(req,res)=>{
  res.render('index',{
    title: 'weather app',
    tempreture:99
  })
}) 


//help page
app.get('/help',(req,res)=>{
  res.render('help',{
    title: "help me "
  })
})


//about
app.get('/about',(req,res)=>{
  res.render('about',{
    title: "hello moto"
  })
})

//weather page
app.get('/weather',(req,res)=>{                                  

res.send({
  forecast:"Its freaking cold",
  tempreture: -9 
})

})

app.listen(3000,()=>{                               //  // for running the server takes the port no.    
  console.log('running the server at 3000')
})