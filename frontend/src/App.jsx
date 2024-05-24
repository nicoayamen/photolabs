import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <div className="App">
    <HomeRoute topics={topics} 
    photos={photos}
    open={open}
    setOpen={setOpen}/>
    {open && <PhotoDetailsModal open={open} toggleModal={toggleModal}/>}
  </div>
  );
};

export default App;
