import React, { useState, useEffect } from "react";
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

function MinutelyGraph(props) {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const tempWeatherData = props.data.map((item) => {
      var date = new Date(item.dt * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var formattedTime = hours + ":" + minutes.substr(-2);
      return {
        dt: formattedTime,
        precipitation: item.precipitation,
      };
    });
    setWeatherData(tempWeatherData);
  }, [props]);

  return (
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

        <Line
          type="monotone"
          dataKey="precipitation"
          stroke="#1019b5"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default MinutelyGraph;
