function ExtendedDailyBox(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">
            <p>
              sunrise : {props.data.sunrise} sunset : {props.data.sunset}
              moonrise : {props.data.moonrise} moonset : {props.data.moonset}
            </p>
            <p>
              max temp : {props.data.temp.max} min temp : {props.data.temp.min}
              night temp : {props.data.temp.night} evening temp :{" "}
              {props.data.temp.eve} morn temp : {props.data.temp.morn}
            </p>
            <p>
              feels like temp - day : {props.data.feels_like.day} night :{" "}
              {props.data.feels_like.night}
              eve : {props.data.feels_like.eve} morn :{" "}
              {props.data.feels_like.morn}
            </p>
            <p>pressure : {props.data.pressure}</p>
            <p>humidity : {props.data.humidity}</p>
            <p>dew point : {props.data.dew_point}</p>
            <p>cloudiness : {props.data.clouds}</p>
            <p>rain : {props.data.rain}</p>
            <p>uvi : {props.data.uvi}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExtendedDailyBox;
