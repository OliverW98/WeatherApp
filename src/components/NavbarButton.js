function NavbarButton(props) {
  return (
    <p className="control">
      <button
        name={props.name}
        onClick={props.handleClick}
        className="button is-primary is-outlined"
      >
        {props.label}
      </button>
    </p>
  );
}
export default NavbarButton;
