import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, photos, likedPhotos, toggleLike, modalOpen, toggleModal, selectPhoto, fetchPhotosByTopic, light, switchLight }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos} fetchPhotosByTopic={fetchPhotosByTopic} light={light} switchLight={switchLight}/>
      <PhotoList photos={photos}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        selectPhoto={selectPhoto}
      />
    </div>
  );
};

export default HomeRoute;