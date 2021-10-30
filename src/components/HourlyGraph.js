import React, { useEffect, useState } from "react";
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
import Checkbox from "./Checkbox";

const initialDataPoints = [
  {
    dataKey: "temperature",
    stroke: "#8884d8",
    checked: true,
    label: "Temperature",
  },
  {
    dataKey: "feelsLike",
    stroke: "#d47dae",
    checked: false,
    label: "Feels Like",
  },
  {
    dataKey: "pressure",
    stroke: "#bc6acc",
    checked: false,
    label: "Pressure",
  },
  {
    dataKey: "humidity",
    stroke: "#60bf63",
    checked: false,
    label: "Humidity",
  },
  {
    dataKey: "dewPoint",
    stroke: "#6897a3",
    checked: false,
    label: "Dew Point",
  },
  { dataKey: "uvi", stroke: "#cad145", checked: false, label: "UVI" },
  {
    dataKey: "clouds",
    stroke: "#96d6d4",
    checked: false,
    label: "Cloud Percentage",
  },
  {
    dataKey: "visibility",
    stroke: "#73a5d1",
    checked: false,
    label: "Visibility",
  },
  {
    dataKey: "windSpeed",
    stroke: "#d1a375",
    checked: false,
    label: "Wind Speed",
  },
];

function Graph(props) {
  const [weatherData, setWeatherData] = useState([]);
  const [dataPoints, setDataPoints] = useState(initialDataPoints);

  function handleChange(event) {
    const { name, checked } = event.target;
    const newDataPoints = dataPoints.map((point) => {
      if (name === point.dataKey) {
        return { ...point, checked: checked };
      } else {
        return point;
      }
    });
    setDataPoints(newDataPoints);
  }

  function renderLines(lines) {
    return lines.map((line) =>
      line.checked ? (
        <Line
          key={line.dataKey}
          type="monotone"
          dataKey={line.dataKey}
          stroke={line.stroke}
          activeDot={{ r: 8 }}
        />
      ) : null
    );
  }

  useEffect(() => {
    const tempWeather = props.data.map((item) => {
      const date = new Date(item.dt * 1000);
      const hours = date.getHours();
      const minutes = "0" + date.getMinutes();
      const formattedTime = hours + ":" + minutes.substr(-2);
      return {
        dt: formattedTime,
        temperature: item.temp,
        feelsLike: item.feels_like,
        pressure: item.pressure,
        humidity: item.humidity,
        dewPoint: item.dew_point,
        uvi: item.uvi,
        clouds: item.clouds,
        visibility: item.visibility,
        windSpeed: item.wind_speed,
      };
    });

    setWeatherData(tempWeather);
  }, [props]);

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={weatherData}
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
          {renderLines(dataPoints)}
        </LineChart>
      </ResponsiveContainer>
      {dataPoints.map((point) => (
        <Checkbox
          key={point.dataKey}
          dataKey={point.dataKey}
          checked={point.checked}
          label={point.label}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
export default Graph;
