import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  
  const parsedTopic = props.topics.map((topic) =>
    <TopicListItem
    key={topic.id}
    label={topic.title}
    />
    )

  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopic}
    </div>
  );
};


export default TopicList;
