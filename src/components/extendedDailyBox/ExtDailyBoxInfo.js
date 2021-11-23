function ExtDailyBoxInfo(props) {
  return (
    <div className="column">
      <div className="columns">
        <div className="column">
          <p>
            <b>pressure</b>
          </p>
          <p>
            <b>humidity</b>
          </p>
          <p>
            <b>dew point</b>
          </p>
          <p>
            <b>cloudiness</b>
          </p>
          <p>
            <b>uvi</b>
          </p>
          {props.data.rain != null ? (
            <p>
              <b>rain</b>
            </p>
          ) : null}
        </div>
        <div className="column">
          <p>{props.data.pressure} hPa</p>
          <p>{props.data.humidity} %</p>
          <p>
            {props.data.dew_point.toFixed(0)}{" "}
            {props.isUsingMetric ? "°C" : "°F"}{" "}
          </p>
          <p>{props.data.clouds} %</p>
          <p>{props.data.uvi}</p>
          {props.data.rain != null ? (
            <p>{props.data.rain.toFixed(0)} mm</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default ExtDailyBoxInfo;
