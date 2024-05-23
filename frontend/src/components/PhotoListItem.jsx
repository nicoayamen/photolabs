import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({id, location, imageSource, username, profile}) => {
  return (
    <div>
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div>
        <img src={profile} alt={`Profile of ${username}`} />
        <p>ID: {id}</p>
        <p>{username}</p>  
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
