function GraphCheckbox(props) {
  return (
    <label className="checkbox">
      <input
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
