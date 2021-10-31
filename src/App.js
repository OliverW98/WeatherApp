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

const initialPagesDisplayed = [
  { name: "current", isDisplayed: true, label: "Current" },
  { name: "minutely", isDisplayed: false, label: "Minutely" },
  { name: "hourly", isDisplayed: false, label: "Hourly" },
  { name: "daily", isDisplayed: false, label: "Daily" },
];

function App() {
  const [weatherData, setWeatherData] = useState(initialWeatherData);
  const [isUsingMetric, setIsUingMertic] = useState(true);
  const [pagesDisplayed, setPagesDisplayed] = useState(initialPagesDisplayed);

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

  function handleClick(event) {
    const { name } = event.target;
    const newPagesDiplayed = pagesDisplayed.map((page) => {
      if (name === page.name) {
        return { ...page, isDisplayed: true };
      } else {
        return { ...page, isDisplayed: false };
      }
    });
    setPagesDisplayed(newPagesDiplayed);
    console.log(pagesDisplayed);
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
      <Navbar
        initialPagesDisplayed={initialPagesDisplayed}
        handleClick={handleClick}
        switchUnits={switchUnits}
        isUsingMetric={isUsingMetric}
      />
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half has-text-centered">
          <div className="content">
            <p>Current Time Zone : {weatherData.data.timezone}</p>
          </div>
        </div>
        <div className="column"></div>
      </div>
      {pagesDisplayed[0].isDisplayed ? (
        <CurrentWeather
          data={weatherData.data.current}
          isUsingMetric={isUsingMetric}
        />
      ) : null}
      {pagesDisplayed[1].isDisplayed ? (
        <MinutelyGraph
          data={weatherData.data.minutely}
          isUsingMetric={isUsingMetric}
        />
      ) : null}
      {pagesDisplayed[2].isDisplayed ? (
        <HourlyGraph
          data={weatherData.data.hourly}
          isUsingMetric={isUsingMetric}
        />
      ) : null}
      {pagesDisplayed[3].isDisplayed ? (
        <Daily data={weatherData.data.daily} isUsingMetric={isUsingMetric} />
      ) : null}
    </div>
  );
}

export default App;
