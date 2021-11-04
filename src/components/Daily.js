import React, { useState } from "react";
import DailyBox from "./DailyBox";
import ExtDailyBox from "./extendedDailyBox/ExtDailyBox";
function Daily(props) {
  const [extendedBox, setExtendeBox] = useState(null);

  function handleClick(event) {
    const { id } = event.target;
    setExtendeBox(
      <ExtDailyBox
        data={props.data[id]}
        handleClose={handleClose}
        isUsingMetric={props.isUsingMetric}
      />
    );
  }

  function handleClose() {
    setExtendeBox(null);
  }

  const dailyBoxes = props.data.map((day, index) => (
    <DailyBox
      id={index}
      data={day}
      isUsingMetric={props.isUsingMetric}
      handleClick={handleClick}
    />
  ));
  return (
    <div>
      <div className="columns">{dailyBoxes}</div>
      {extendedBox}
    </div>
  );
}
export default Daily;
