function ExtDailyBoxTable(props) {
  const units = props.isUsingMetric ? "°C" : "°F";
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <p className="has-text-centered">
              <i className="fas fa-thermometer-half fa-2x"></i>
            </p>
          </th>
          <th>Max</th>
          <th>Min</th>
          <th>Morn</th>
          <th>Day</th>
          <th>Eve</th>
          <th>Night</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Temperature</th>
          <td>
            {props.temp.max.toFixed(0)}
            {" " + units}
          </td>
          <td>
            {props.temp.min.toFixed(0)}
            {" " + units}
          </td>
          <td>
            {props.temp.morn.toFixed(0)}
            {" " + units}
          </td>
          <td>
            {props.temp.day.toFixed(0)}
            {" " + units}
          </td>
          <td>
            {props.temp.eve.toFixed(0)}
            {" " + units}
          </td>
          <td>
            {props.temp.night.toFixed(0)}
            {" " + units}
          </td>
        </tr>
        <tr>
          <th>Feels Like</th>
          <td></td>
          <td></td>
          <td>
            {props.feels_like.morn.toFixed(0)}
            {" " + units}
          </td>
          <td>
            {props.feels_like.day.toFixed(0)}
            {" " + units}
          </td>
          <td>
            {props.feels_like.eve.toFixed(0)}
            {" " + units}
          </td>
          <td>
            {props.feels_like.night.toFixed(0)}
            {" " + units}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default ExtDailyBoxTable;
