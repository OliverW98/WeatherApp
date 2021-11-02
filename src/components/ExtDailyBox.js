import ExtDailyBoxTable from "./ExtDailyBoxTable";
function ExtDailyBox(props) {
  function getMoonPhase() {
    const phase = props.data.moon_phase;
    if (phase === 0 || phase === 1) {
      return "New Moon";
    } else if (phase > 0 && phase < 0.25) {
      return "Waxing Crescent";
    } else if (phase === 0.25) {
      return "First Quarter Moon";
    } else if (phase > 0.25 && phase < 0.5) {
      return "Waxing Gibous";
    } else if (phase === 0.5) {
      return "Full Moon";
    } else if (phase > 0.5 && phase < 0.75) {
      return "Waning Gibous";
    } else if (phase === 0.75) {
      return "Last Quarter Moon";
    } else if (phase > 0.75 && phase < 1) {
      return "Waning Crescent";
    }
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">
            <p>
              <i class="far fa-sun fa-2x"></i>
              <b> Sunrise</b> : {props.data.sunrise} <b> Sunset</b> :{" "}
              {props.data.sunset}
            </p>
            <p>
              <i class="far fa-moon fa-2x"></i>
              <b> Moonrise</b> : {props.data.moonrise} <b> Moonset</b> :{" "}
              {props.data.moonset}
            </p>

            <p>
              <b>Moonphase</b> : {getMoonPhase()}
            </p>
            <ExtDailyBoxTable
              temp={props.data.temp}
              feels_like={props.data.feels_like}
              isUsingMetric={props.isUsingMetric}
            />
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
export default ExtDailyBox;
