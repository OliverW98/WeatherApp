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
import GraphCheckboxes from "./GraphCheckboxes";

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

  function handleChecked(event) {
    const { name, checked } = event.target;

    if (name === "temperature") {
      setTemp(checked);
    } else if (name === "feels_like") {
      setFeelsLike(checked);
    } else if (name === "feels_like") {
      setFeelsLike(checked);
    } else if (name === "pressure") {
      setPressure(checked);
    } else if (name === "humidity") {
      setHumidity(checked);
    } else if (name === "dew_point") {
      setDewPoint(checked);
    } else if (name === "uvi") {
      setUvi(checked);
    } else if (name === "clouds") {
      setClouds(checked);
    } else if (name === "visibility") {
      setVisibility(checked);
    } else if (name === "wind_speed") {
      setWindSpeed(checked);
    }
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
      <GraphCheckboxes
        handleChecked={handleChecked}
        tempChecked={tempChecked}
        feelsLikeChecked={feelsLikeChecked}
        pressureChecked={pressureChecked}
        humidityChecked={humidityChecked}
        dewPointChecked={dewPointChecked}
        uviChecked={uviChecked}
        cloudsChecked={cloudsChecked}
        visibilityChecked={visibilityChecked}
        windSpeedChecked={windSpeedChecked}
      />
    </div>
  );
}
export default Graph;
