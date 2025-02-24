import "./Drawer.scss";
import Tag from "../Tag/Tag";
import tags from "../../data/tags.json";
import { useContext } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";

export default function Drawer({ className }) {
  const selectedTag = useContext(selectedTagContext);
  const setSelectedTag = useContext(setSelectedTagContext);
  const tagList = tags.map((tag) => (
    <Tag
      value={tag}
      key={tag}
      isClickable
      onClick={() => {
        if (selectedTag === tag) {
          setSelectedTag(null);
        } else {
          setSelectedTag(tag);
        }
      }}
      selectedTag={selectedTag}
      font="label"
    />
  ));
  return (
    <div className={className}>
      <p className="drawer__heading body-copy">Filters</p>
      <div className="drawer__tags">{tagList}</div>
    </div>
  );
}
