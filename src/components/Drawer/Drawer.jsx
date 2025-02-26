import "./Drawer.scss";
import Tag from "../Tag/Tag";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";

export default function Drawer({ className }) {
  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "8e3792a3-b23c-4f9d-97c2-c1e35ad2df23";
  const [tags, setTags] = useState(null);
  const selectedTag = useContext(selectedTagContext);
  const setSelectedTag = useContext(setSelectedTagContext);

  useEffect(() => {
    fetchTags();
  }, []);

  async function fetchTags() {
    try {
      const response = await axios.get(`${BASE_URL}/tags?api_key=${API_KEY}`);
      setTags(response.data);
    }
    catch (e) {
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
