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
  const [isGraphDisplayed, setIsGraphDisplayed] = useState(false);
  const [isCurrentDisplayed, setIsCurrenthDisplayed] = useState(true);
  const [isDailyDisplayed, setIsDailyDisplayed] = useState(false);
  const [isMinutelyDisplayed, setIsMinutelyDisplayed] = useState(false);

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

  function displayCurrent() {
    if (isCurrentDisplayed === false) {
      setIsCurrenthDisplayed(true);
      setIsGraphDisplayed(false);
      setIsDailyDisplayed(false);
      setIsMinutelyDisplayed(false);
    }
  }

  function displayGraph() {
    if (isGraphDisplayed === false) {
      setIsCurrenthDisplayed(false);
      setIsGraphDisplayed(true);
      setIsDailyDisplayed(false);
      setIsMinutelyDisplayed(false);
    }
  }

  function displayDaily() {
    if (isDailyDisplayed === false) {
      setIsCurrenthDisplayed(false);
      setIsGraphDisplayed(false);
      setIsDailyDisplayed(true);
      setIsMinutelyDisplayed(false);
    }
  }

  function displayMinutely() {
    if (isMinutelyDisplayed === false) {
      setIsCurrenthDisplayed(false);
      setIsGraphDisplayed(false);
      setIsDailyDisplayed(false);
      setIsMinutelyDisplayed(true);
    }
  }

  async function switchUnits() {
    setIsUingMertic(!isUsingMetric);

    const data = isUsingMetric
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
    console.log(isUsingMetric);
  }

  // <pre>{JSON.stringify(weatherData.data.daily, null, 2)}</pre>

  return (
    <div>
      <Navbar
        displayCurrent={displayCurrent}
        displayGraph={displayGraph}
        displayDaily={displayDaily}
        displayMinutely={displayMinutely}
        switchUnits={switchUnits}
        isUsingMetric={isUsingMetric}
      />
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <input className="input" type="number" placeholder="Lat" />
        </div>
        <div className="column">
          <input className="input" type="number" placeholder="Long" />
        </div>
        <div className="column">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half has-text-centered">
          <div className="content">
            <p>Current Time Zone : {weatherData.data.timezone}</p>
          </div>
        </div>
        <div className="column"></div>
      </div>
      {isGraphDisplayed ? (
        <HourlyGraph
          data={weatherData.data.hourly}
          isUsingMetric={isUsingMetric}
        />
      ) : null}
      {isCurrentDisplayed ? (
        <CurrentWeather
          data={weatherData.data.current}
          isUsingMetric={isUsingMetric}
        />
      ) : null}
      {isDailyDisplayed ? (
        <Daily data={weatherData.data.daily} isUsingMetric={isUsingMetric} />
      ) : null}
      {isMinutelyDisplayed ? (
        <MinutelyGraph
          data={weatherData.data.minutely}
          isUsingMetric={isUsingMetric}
        />
      ) : null}
    </div>
  );
}

export default App;
