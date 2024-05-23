import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  return (
    <li className="photo-list__item" key={photo.id}>
    <div className="photo-list__item__details">
      <img className="photo-list__image" src={photo.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile}></img>
        <div className="photo-list__user-info">
          <span>{photo.username}</span>
          <div className="photo-list__user-location">
            <span>{photo.location.city}, </span>
            <span>{photo.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  </li>
);
};

export default PhotoListItem;
