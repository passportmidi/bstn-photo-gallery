import "./Drawer.scss";
import Tag from "../Tag/Tag";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";

export default function Drawer({ className }) {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [tags, setTags] = useState(null);
  const selectedTag = useContext(selectedTagContext);
  const setSelectedTag = useContext(setSelectedTagContext);

  useEffect(() => {
    fetchTags();
  }, []);

  async function fetchTags() {
    try {
      const response = await axios.get(`${BASE_URL}/tags`);
      setTags(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  if (!tags) {
    return <div>"loading tags..."</div>;
  }

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
