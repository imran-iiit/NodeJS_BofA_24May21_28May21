var request = require('request')

// var dburl='http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8d58f894f58f99a56dbd48b5e593b029&units=metric';

var dburl='http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric';





request({
    url:dburl,
    JSON:true
}, function(error, response, body){
    if(error){
        console.log('unable to get the weather')

    }else{
        console.log(body.main.temp + ' in ' + body.name)
    }
})