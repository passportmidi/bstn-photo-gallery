import "./Tag.scss";

function Tag({ value, isClickable = false, onClick, selectedTag }) {
  return (
    <button
      className={`tag${isClickable ? " tag--clickable" : ""}${
        selectedTag === value ? " tag--selected" : ""
      } label`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Tag;
