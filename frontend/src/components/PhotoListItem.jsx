import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { photo, liked, toggleLike } = props;

  const toggleModal = () => {
    props.setOpen(prevState => !prevState);
  };

  return (
    <li className="photo-list__item" key={photo.id}>
      <PhotoFavButton liked={liked} toggleLike={toggleLike}/>
      <img className="photo-list__image" src={photo.urls.regular} onClick={toggleModal}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile}></img>
        <div className="photo-list__user-info">
          <span>{photo.user.username}</span>
          <div className="photo-list__user-location">
            <span>{photo.location.city}, </span>
            <span>{photo.location.country}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
