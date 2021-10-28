import DailyBox from "./DailyBox";
function Daily(props) {
  return (
    <div className="columns">
      <DailyBox data={props.data[0]} isUsingMetric={props.isUsingMetric} />
      <DailyBox data={props.data[1]} isUsingMetric={props.isUsingMetric} />
      <DailyBox data={props.data[2]} isUsingMetric={props.isUsingMetric} />
      <DailyBox data={props.data[3]} isUsingMetric={props.isUsingMetric} />
      <DailyBox data={props.data[4]} isUsingMetric={props.isUsingMetric} />
      <DailyBox data={props.data[5]} isUsingMetric={props.isUsingMetric} />
      <DailyBox data={props.data[6]} isUsingMetric={props.isUsingMetric} />
    </div>
  );
}
export default Daily;
