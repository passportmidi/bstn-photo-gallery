import "./Drawer.scss";
import Tag from "../Tag/Tag";
import tags from "../../data/tags.json";

export default function Drawer() {
  const tagList = tags.map((tag) => <Tag value={tag} key={tag} />);
  return (
    <div className="drawer">
      <p className="drawer__heading body-copy">Filters</p>
      <div className="drawer__tags">{tagList}</div>
    </div>
  );
}
