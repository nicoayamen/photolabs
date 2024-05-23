import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <div className="App">
      {/* {photos.map((_, index) => (
        <PhotoListItem
          key={index}
          photo={sampleDataForPhotoListItem}
        />
      ))} */}
      <PhotoList />
    </div>
  );
};

export default App;
