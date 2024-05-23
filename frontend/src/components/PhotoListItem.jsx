import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  return (
    <div>
      <img src={photo.imageSource} alt={`Photo by ${photo.username}`} />
      <div>
        <img src={photo.profile} alt={`Profile of ${photo.username}`} />
        <p>ID: {photo.id}</p>
        <p>{photo.username}</p>  
        <p>{photo.location.city}, {photo.location.country}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
