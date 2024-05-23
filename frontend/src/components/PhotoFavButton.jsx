import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(prevLike => !prevLike);
  };

  return (
    <div className={"photo-list__fav-icon"} onClick={handleClick}>
      <div className={"photo-list__fav-icon-svg"}>
        <FavIcon selected={like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;