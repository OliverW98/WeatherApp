import { useState } from "react/cjs/react.development";
import DailyBox from "./DailyBox";
import ExtendedDailyBox from "./ExtenededDailyBox";
function Daily(props) {
  const [extendedBox, setExtendeBox] = useState(null);

  function handleClick(event) {
    const { id } = event.target;
    setExtendeBox(<ExtendedDailyBox id={id} />);
  }

  return (
    <div>
      <div className="columns is-gapless">
        <DailyBox
          id={0}
          data={props.data[0]}
          isUsingMetric={props.isUsingMetric}
          handleClick={handleClick}
        />
        <DailyBox
          id={1}
          data={props.data[1]}
          isUsingMetric={props.isUsingMetric}
          handleClick={handleClick}
        />
        <DailyBox
          id={2}
          data={props.data[2]}
          isUsingMetric={props.isUsingMetric}
          handleClick={handleClick}
        />
        <DailyBox
          id={3}
          data={props.data[3]}
          isUsingMetric={props.isUsingMetric}
          handleClick={handleClick}
        />
        <DailyBox
          id={4}
          data={props.data[4]}
          isUsingMetric={props.isUsingMetric}
          handleClick={handleClick}
        />
        <DailyBox
          id={5}
          data={props.data[5]}
          isUsingMetric={props.isUsingMetric}
          handleClick={handleClick}
        />
        <DailyBox
          id={6}
          data={props.data[6]}
          isUsingMetric={props.isUsingMetric}
          handleClick={handleClick}
        />
      </div>
      {extendedBox}
    </div>
  );
}
export default Daily;
