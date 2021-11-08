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
