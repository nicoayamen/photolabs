import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, toggleModal, toggleLike, fetchPhotosByTopic, toggleLight } = useApplicationData();

  return (
    <div className={`App ${state.light}`}>
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        modalOpen={state.modalOpen}
        toggleModal={toggleModal}
        selectPhoto={state.selectPhoto}
        toggleLike={toggleLike}
        likedPhotos={state.likedPhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        light={state.light} // Pass light mode to HomeRoute
        switchLight={toggleLight} // Pass toggleLight function to HomeRoute
      />
      {state.modalOpen &&
        <PhotoDetailsModal
          modalOpen={state.modalOpen}
          toggleModal={toggleModal}
          selectPhoto={state.selectPhoto}
          toggleLike={toggleLike}
          likedPhotos={state.likedPhotos}
        />}
    </div>
  );
};

export default App;