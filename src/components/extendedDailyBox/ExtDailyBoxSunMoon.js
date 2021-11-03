function ExtDailyBoxSunMoon(props) {
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

  function createFormattedDate(UTCDate) {
    let date = new Date(UTCDate * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  }
  return (
    <div className="column">
      <div className="columns">
        <div className="column has-text-centered">
          <p>
            <i class="far fa-sun fa-2x"></i>
          </p>
          <p>
            <b> Sunrise</b> {createFormattedDate(props.data.sunrise)}
          </p>
          <p>
            <b> Sunset</b> {createFormattedDate(props.data.sunset)}
          </p>
        </div>
        <div className="column has-text-centered">
          <p>
            <i class="far fa-moon fa-2x"></i>
          </p>
          <p>
            <b>Moonrise</b> {createFormattedDate(props.data.moonrise)}{" "}
            <b>Moonset</b> {createFormattedDate(props.data.moonset)}
          </p>
        </div>
      </div>

      <p></p>
      <p></p>
      <p className="has-text-centered">
        <b>Moonphase</b> : {getMoonPhase()}
      </p>
    </div>
  );
}
export default ExtDailyBoxSunMoon;
