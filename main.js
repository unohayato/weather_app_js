const request = require("request")

const options = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=cfc6f11fba2e4b41e874fa5f9be3bffc",
  method: "GET",

};

request(options, (error, res, body) => {
  console.log(body);
});