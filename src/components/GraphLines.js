import { Line } from "recharts";
function GraphLines(props) {
  console.log("called");

  // <GraphLines
  //   tempChecked={tempChecked}
  //   feelsLikeChecked={feelsLikeChecked}
  //   pressureChecked={pressureChecked}
  //   humidityChecked={humidityChecked}
  //   dewPointChecked={dewPointChecked}
  //   uviChecked={uviChecked}
  //   cloudsChecked={cloudsChecked}
  //   visibilityChecked={visibilityChecked}
  //   windSpeedChecked={windSpeedChecked}
  // />;
  return (
    <div>
      {props.tempChecked ? (
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      {props.feelsLikeChecked ? (
        <Line
          type="monotone"
          dataKey="feels_like"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      {props.pressureChecked ? (
        <Line
          type="monotone"
          dataKey="pressure"
          stroke="#8564d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      {props.humidityChecked ? (
        <Line
          type="monotone"
          dataKey="humidity"
          stroke="#8564d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      {props.dewPointChecked ? (
        <Line
          type="monotone"
          dataKey="dew_point"
          stroke="#8564d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      {props.uviChecked ? (
        <Line
          type="monotone"
          dataKey="uvi"
          stroke="#8564d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      {props.cloudsChecked ? (
        <Line
          type="monotone"
          dataKey="clouds"
          stroke="#8564d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      {props.visibilityChecked ? (
        <Line
          type="monotone"
          dataKey="visibility"
          stroke="#8564d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      {props.windSpeedChecked ? (
        <Line
          type="monotone"
          dataKey="wind_speed"
          stroke="#8564d8"
          activeDot={{ r: 8 }}
        />
      ) : null}
      )
    </div>
  );
}
export default GraphLines;
