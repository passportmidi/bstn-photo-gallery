import "./Tag.scss";

function Tag({ value, isClickable = false, onClick, selectedTag, font }) {
  return (
    // change styling depending on whether button is clickable or selected
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
