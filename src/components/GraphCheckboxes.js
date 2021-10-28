import Checkbox from "./Checkbox";
function GraphCheckboxes(props) {
  return (
    <div>
      <Checkbox
        label="Temperature"
        name="temp"
        onChange={props.handleChecked}
        checked={props.tempChecked}
      />
      <Checkbox
        label="Feels Like"
        name="feels_like"
        onChange={props.handleChecked}
        checked={props.feelsLikeChecked}
      />
      <Checkbox
        label="Pressure"
        name="pressure"
        onChange={props.handleChecked}
        checked={props.pressureChecked}
      />
      <Checkbox
        label="Humidity"
        name="humidity"
        onChange={props.handleChecked}
        checked={props.humidityChecked}
      />
      <Checkbox
        label="Dew Point"
        name="dew_point"
        onChange={props.handleChecked}
        checked={props.dewPointChecked}
      />
      <Checkbox
        label="UV index"
        name="uvi"
        onChange={props.handleChecked}
        checked={props.uviChecked}
      />
      <Checkbox
        label="Cloud Percentage"
        name="clouds"
        onChange={props.handleChecked}
        checked={props.cloudsChecked}
      />
      <Checkbox
        label="Visibility"
        name="visibility"
        onChange={props.handleChecked}
        checked={props.visibilityChecked}
      />
      <Checkbox
        label="Wind Speed"
        name="wind_speed"
        onChange={props.handleChecked}
        checked={props.windSpeedChecked}
      />
    </div>
  );
}
export default GraphCheckboxes;
