async function GetWeatherData() {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=51.50&lon=0.12&units=imperial&appid=2bd07e5752c54f8ecafed18c4afec896"
    );
    const data = res.json();
    return data;
  } catch (e) {
    console.error("oops: ", e);
  }
}

// const mockGetData = async (delay) =>
//   new Promise((resolve) =>
//     setTimeout(resolve, delay, { weather: "sunny", temp: 15 })
//   );

export default GetWeatherData;
