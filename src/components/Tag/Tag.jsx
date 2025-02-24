import "./Tag.scss";

function Tag({ value, isClickable = false, onClick, selectedTag, font }) {
  return (
    <button
      className={`tag${isClickable ? " tag--clickable" : ""}${
        selectedTag === value ? " tag--selected" : ""
      } ${font}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Tag;
