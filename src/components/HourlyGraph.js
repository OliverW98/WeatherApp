import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import GraphCheckbox from "./GraphCheckbox";

function Graph(props) {
  const [tempChecked, setTemp] = useState(true);
  const [feelsLikeChecked, setFeelsLike] = useState(false);
  const [pressureChecked, setPressure] = useState(false);
  const [humidityChecked, setHumidity] = useState(false);
  const [dewPointChecked, setDewPoint] = useState(false);
  const [uviChecked, setUvi] = useState(false);
  const [cloudsChecked, setClouds] = useState(false);
  const [visibilityChecked, setVisibility] = useState(false);
  const [windSpeedChecked, setWindSpeed] = useState(false);

  var weatherData = { data: [] };

  props.data.map((item) => {
    var date = new Date(item.dt * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ":" + minutes.substr(-2);

    weatherData.data.push({
      dt: formattedTime,
      temperature: item.temp,
      feels_like: item.feels_like,
      pressure: item.pressure,
      humidity: item.humidity,
      dew_point: item.dew_point,
      uvi: item.uvi,
      clouds: item.clouds,
      visibility: item.visibility,
      wind_speed: item.wind_speed,
    });
  });

  function handleTemp(event) {
    setTemp(event.target.checked);
  }
  function handleFeelsLike(event) {
    setFeelsLike(event.target.checked);
  }
  function handlePressure(event) {
    setPressure(event.target.checked);
  }
  function handleHumidity(event) {
    setHumidity(event.target.checked);
  }
  function handleDewPoint(event) {
    setDewPoint(event.target.checked);
  }
  function handleUvi(event) {
    setUvi(event.target.checked);
  }
  function handleClouds(event) {
    setClouds(event.target.checked);
  }
  function handleVisibility(event) {
    setVisibility(event.target.checked);
  }
  function handleWindSpeed(event) {
    setWindSpeed(event.target.checked);
  }
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={weatherData.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt" />
          <YAxis />
          <Tooltip />
          <Legend />
          {tempChecked ? (
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
          {feelsLikeChecked ? (
            <Line
              type="monotone"
              dataKey="feels_like"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
          {pressureChecked ? (
            <Line
              type="monotone"
              dataKey="pressure"
              stroke="#8564d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
          {humidityChecked ? (
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#8564d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
          {dewPointChecked ? (
            <Line
              type="monotone"
              dataKey="dew_point"
              stroke="#8564d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
          {uviChecked ? (
            <Line
              type="monotone"
              dataKey="uvi"
              stroke="#8564d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
          {cloudsChecked ? (
            <Line
              type="monotone"
              dataKey="clouds"
              stroke="#8564d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
          {visibilityChecked ? (
            <Line
              type="monotone"
              dataKey="visibility"
              stroke="#8564d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
          {windSpeedChecked ? (
            <Line
              type="monotone"
              dataKey="wind_speed"
              stroke="#8564d8"
              activeDot={{ r: 8 }}
            />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
      <GraphCheckbox
        label="Temperature"
        name="temp"
        onChange={handleTemp}
        checked={tempChecked}
      />
      <GraphCheckbox
        label="Feels Like"
        name="feels_like"
        onChange={handleFeelsLike}
        checked={feelsLikeChecked}
      />
      <GraphCheckbox
        label="Pressure"
        name="pressure"
        onChange={handlePressure}
        checked={pressureChecked}
      />
      <GraphCheckbox
        label="Humidity"
        name="humidity"
        onChange={handleHumidity}
        checked={humidityChecked}
      />
      <GraphCheckbox
        label="Dew Point"
        name="dew_point"
        onChange={handleDewPoint}
        checked={dewPointChecked}
      />
      <GraphCheckbox
        label="UV index"
        name="uvi"
        onChange={handleUvi}
        checked={uviChecked}
      />
      <GraphCheckbox
        label="Cloud Percentage"
        name="clouds"
        onChange={handleClouds}
        checked={cloudsChecked}
      />
      <GraphCheckbox
        label="Visibility"
        name="visibility"
        onChange={handleVisibility}
        checked={visibilityChecked}
      />
      <GraphCheckbox
        label="Wind Speed"
        name="wind_speed"
        onChange={handleWindSpeed}
        checked={windSpeedChecked}
      />
    </div>
  );
}
export default Graph;
