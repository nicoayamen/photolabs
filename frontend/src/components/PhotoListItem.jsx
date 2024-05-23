import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  return (
    <li className="photo-list__item" key={photo.id}>
      <PhotoFavButton />
    <div className="photo-list__details">
      <img className="photo-list__image" src={photo.imageSource} alt={`Photo by ${photo.username}`}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt={`Profile of ${photo.username}`}></img>
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
