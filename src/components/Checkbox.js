function GraphCheckbox(props) {
  return (
    <label className="checkbox mr-1 ml-1">
      <input
        className="mr-1"
        name={props.name}
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.label}
    </label>
  );
}
export default GraphCheckbox;
