function Navbar(props) {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <img
          src="http://openweathermap.org/img/wn/11d@4x.png"
          alt="WeatherApp: a modern way of writing bad code"
          width="112"
          height="28"
        />
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <button
                  onClick={props.displayCurrent}
                  className="button is-primary is-outlined"
                >
                  Current
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-primary is-outlined"
                  onClick={props.displayMinutely}
                >
                  Minutely
                </button>
              </p>
              <p className="control">
                <button
                  onClick={props.displayGraph}
                  className="button is-primary is-outlined"
                >
                  Hourly
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-primary is-outlined"
                  onClick={props.displayDaily}
                >
                  Daily
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <button
                  id="metricButton"
                  className="button is-primary is-active"
                  onClick={props.switchUnits}
                >
                  Using {props.isUsingMetric ? "Metric" : "Imperial"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
