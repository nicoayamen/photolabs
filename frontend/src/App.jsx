import React, { useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, toggleModal, toggleLike  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={state.topicData}
        photos={state.photoData}
        modalOpen={state.modalOpen}
        toggleModal={toggleModal}
        selectPhoto={state.selectPhoto}
        toggleLike={toggleLike} 
        likedPhotos={state.likedPhotos} 
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
