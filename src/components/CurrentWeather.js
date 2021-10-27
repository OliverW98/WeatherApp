function CurrentWeather(props) {
  var date = new Date(props.data.dt * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime = hours + ":" + minutes.substr(-2);

  const iconUrl =
    "http://openweathermap.org/img/wn/" +
    props.data.weather[0].icon +
    "@4x.png";

  return (
    <div className="container">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
          <div className="box">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src={iconUrl} alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-2">{props.data.weather[0].main}</p>
                <p className="subtitle is-4">
                  {props.data.weather[0].description}
                </p>
              </div>
              <div className="media-content-right">
                <p className="is-size-2 has-text-right"> {formattedTime}</p>
                <p className="is-size-4 has-text-right">
                  Temp : {props.data.temp.toFixed(1)}{" "}
                  {props.isUsingMetric ? "°C" : "°F"}
                </p>
                <p className="is-size-4 has-text-right">
                  Feels like : {props.data.feels_like.toFixed(1)}{" "}
                  {props.isUsingMetric ? "°C" : "°F"}
                </p>

                <p className="is-size-4 has-text-right">
                  Wind Speed : {props.data.wind_speed}{" "}
                  {props.isUsingMetric ? "m/s" : "mph"}
                </p>
              </div>
            </div>
            <hr />
            <div className="columns">
              <div className="column">
                <p>Cloudiness : {props.data.clouds}%</p>
                <p>Humidity : {props.data.humidity}%</p>
              </div>
              <div className="column">
                <p>UV index : {props.data.uvi}</p>
                <p>Visibility : {props.data.visibility} meters</p>
                <p>Pressure : {props.data.pressure} hPa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
export default CurrentWeather;
