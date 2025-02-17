import "./Tag.scss";

function Tag({ value, isClickable = false }) {
  return (
    <button className={`tag${isClickable ? " tag--clickable" : ""} label`}>
      {value}
    </button>
  );
}

export default Tag;
