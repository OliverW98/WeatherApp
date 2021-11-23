import ExtDailyBoxTable from "./ExtDailyBoxTable";
import ExtDailyBoxSunMoon from "./ExtDailyBoxSunMoon";
import ExtDailyBoxInfo from "./ExtDailyBoxInfo";
import dateFormat from "dateformat";
function ExtDailyBox(props) {
  const convertedDate = new Date(props.data.dt * 1000);
  let formattedDate = dateFormat(convertedDate, "dddd dS");

  return (
    <div className="container">
      <div className="box">
        <div className="columns">
          <div className="column">
            <p className="title">{formattedDate}</p>
          </div>
          <div className="column">
            <button
              onClick={props.handleClose}
              class="delete is-pulled-right"
            ></button>
          </div>
        </div>

        <div className="columns">
          <div className="column is-half-widescreen is-one-third-desktop">
            <ExtDailyBoxTable
              temp={props.data.temp}
              feels_like={props.data.feels_like}
              isUsingMetric={props.isUsingMetric}
            />
          </div>
          <ExtDailyBoxSunMoon data={props.data} />
          <ExtDailyBoxInfo
            data={props.data}
            isUsingMetric={props.isUsingMetric}
          />
        </div>
      </div>
    </div>
  );
}
export default ExtDailyBox;
