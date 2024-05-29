import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import SwitchToggle from './SwitchToggle'; // Import the SwitchToggle component

const TopNavigation = ({ likedPhotos, topics, fetchPhotosByTopic, light, switchLight }) => {
  const isFavPhotoExist = likedPhotos.length !== 0;

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopicClick={handleTopicClick} />
      <SwitchToggle light={light} switchLight={switchLight} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} selected={true} />
    </div>
  );
};

export default TopNavigation;