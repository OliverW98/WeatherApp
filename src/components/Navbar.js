function Navbar(props) {
  return (
    <nav className="navbar is-transparent">
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
