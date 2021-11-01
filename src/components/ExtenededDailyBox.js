function ExtendedDailyBox(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">{props.id}</div>
        </div>
      </div>
    </div>
  );
}
export default ExtendedDailyBox;
