import dateFormat from "dateformat";
function DailyBox(props) {
  const iconUrl =
    "http://openweathermap.org/img/wn/" +
    props.data.weather[0].icon +
    "@4x.png";

  const convertedDate = new Date(props.data.dt * 1000);
  var formattedDate = dateFormat(convertedDate, "dddd dS");
  return (
    <div className="column ml-4 mr-4">
      <div className="box">
        <p className="is-size-4">{formattedDate}</p>
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={iconUrl} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="is-size-6">
              <b>{props.data.weather[0].main}</b>
            </p>
            <p className="is-size-7">{props.data.weather[0].description}</p>
          </div>
        </div>
        <p className="is-size-4">
          {props.data.temp.day} {props.isUsingMetric ? "°C" : "°F"}
        </p>
        <p className="is-size-4">
          {props.data.wind_speed} {props.isUsingMetric ? "m/s" : "mph"}
        </p>
        <p className="is-size-4">{props.data.pop * 100}% of Rain</p>
      </div>
    </div>
  );
}
export default DailyBox;
