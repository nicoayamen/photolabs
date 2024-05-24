import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";


const PhotoList = (props) => {

  const { likedPhotos, toggleLike } = props

  const parsedPhotos = props.photos.map((photo) => 
    <PhotoListItem 
    key={photo.id} 
    photo={photo}
    liked={likedPhotos.includes(photo.id)} 
    toggleLike={() => toggleLike(photo.id)} 
    />
    )

    
  return (
    <ul className="photo-list">
      {parsedPhotos}
    </ul>
  );
};

export default PhotoList;
