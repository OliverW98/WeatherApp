async function GetWeatherDataMetric() {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=51.50&lon=0.12&units=metric&appid=2bd07e5752c54f8ecafed18c4afec896"
    );
    const data = res.json();
    return data;
  } catch (e) {
    console.error("oops: ", e);
  }
}

export default GetWeatherDataMetric;
