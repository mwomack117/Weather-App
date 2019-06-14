const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "https://api.darksky.net/forecast/cc0eb74bf9e8dacb00a78212bb5c39ff/" +
    lat +
    "," +
    long;

  // {body} = response.body // destructuring
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location. Please try another", undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary}.  It is currently ${
          body.currently.temperature
        } degrees out. There's a ${
          body.currently.precipProbability
        }% chance of rain. <br>
        Today's high and low temps.
        <ul>
         <li>High of ${body.daily.data[0].temperatureHigh} degrees F</li>
         <li>Low of ${body.daily.data[0].temperatureLow} degrees F</li>
         </ul>
        `
      );
    }
  });
};

module.exports = forecast;
