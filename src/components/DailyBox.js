import dateFormat from "dateformat";
function DailyBox(props) {
  const iconUrl =
    "http://openweathermap.org/img/wn/" +
    props.data.weather[0].icon +
    "@4x.png";

  const style = {
    transform: "rotate(" + (props.data.wind_deg + 180) + "deg)",
  };

  const convertedDate = new Date(props.data.dt * 1000);
  let formattedDate = dateFormat(convertedDate, "dddd dS");
  return (
    <div className="column mx-2">
      <div className="box">
        <p className="is-size-4">{formattedDate}</p>
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={iconUrl} alt="Placeholder" />
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
          {props.data.temp.day.toFixed(1)} {props.isUsingMetric ? "°C" : "°F"}
        </p>
        <p className="is-size-4">
          {props.data.wind_speed.toFixed(1)}{" "}
          {props.isUsingMetric ? "m/s" : "mph"}
          <i className="fas fa-location-arrow rotate ml-3" style={style}></i>
        </p>
        <p className="is-size-4">{props.data.pop.toFixed(1) * 100}% of Rain</p>
        <p className="has-text-centered">
          <i
            id={props.id}
            onClick={props.handleClick}
            className="fas fa-chevron-circle-down fa-lg"
          ></i>
        </p>
      </div>
    </div>
  );
}
export default DailyBox;
