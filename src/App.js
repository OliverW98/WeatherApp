import React, { useEffect, useState } from "react";
import GetWeatherDataImperial from "./GetWeatherDataImperial";
import GetWeatherDataMetric from "./GetWeatherDataMetric";
import HourlyGraph from "./components/HourlyGraph";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";
import Daily from "./components/Daily";
import MinutelyGraph from "./components/MinutelyGraph";

const initialWeatherData = {
  data: undefined,
  loading: true,
  error: false,
};

function App() {
  const [weatherData, setWeatherData] = useState(initialWeatherData);
  const [isUsingMetric, setIsUingMertic] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await GetWeatherDataMetric();

      const newState = {
        data: data,
        loading: false,
        error: false,
      };

      setWeatherData(newState);
    };

    loadData();
  }, []);

  if (weatherData.error) {
    return <div>Something went wrong!</div>;
  }

  if (weatherData.loading) {
    return <div>Data loading...</div>;
  }

  async function switchUnits() {
    const tempIsUsingMetric = !isUsingMetric;

    const data = tempIsUsingMetric
      ? await GetWeatherDataMetric()
      : await GetWeatherDataImperial();

    const newState = {
      data: data,
      loading: false,
      error: false,
    };
    setWeatherData(newState);

    document.getElementById("metricButton").classList.toggle("is-primary");
    document.getElementById("metricButton").classList.toggle("is-danger");
    setIsUingMertic(!isUsingMetric);
  }

  return (
    <div>
      <Navbar switchUnits={switchUnits} isUsingMetric={isUsingMetric} />

      <div className="container is-fluid">
        <div className="columns is-desktop">
          <div className="column is-one-third">
            <p className="title has-text-centered">Current Forecast</p>
            <CurrentWeather
              data={weatherData.data.current}
              isUsingMetric={isUsingMetric}
            />
          </div>
          <div className="column">
            <p className="title has-text-centered">8-day Forecast</p>
            <Daily
              data={weatherData.data.daily}
              isUsingMetric={isUsingMetric}
            />
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column is-one-third">
            <p className="title has-text-centered">Hourly Precipitation</p>
            <MinutelyGraph
              data={weatherData.data.minutely}
              isUsingMetric={isUsingMetric}
            />
          </div>
          <div className="column">
            <p className="title has-text-centered">Hourly Forecast</p>
            <HourlyGraph
              data={weatherData.data.hourly}
              isUsingMetric={isUsingMetric}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
