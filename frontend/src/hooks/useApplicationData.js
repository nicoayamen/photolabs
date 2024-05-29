import { useReducer, useEffect } from "react";

const useApplicationData = () => {
  const initialState = {
    modalOpen: false,
    selectPhoto: {},
    likedPhotos: [],
    photoData: [],
    topicData: [],
    light: 'light',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PHOTO_DATA':
        return { ...state, photoData: action.payload };
      case 'SET_TOPIC_DATA':
        return { ...state, topicData: action.payload };
      case 'SET_PHOTOS_BY_TOPIC':
        return { ...state, photoData: action.payload };
      case 'TOGGLE_MODAL':
        return {
          ...state,
          modalOpen: !state.modalOpen,
          selectPhoto: action.payload,
        };
      case 'TOGGLE_LIKE':
        const isLiked = state.likedPhotos.includes(action.payload);
        return {
          ...state,
          likedPhotos: isLiked
            ? state.likedPhotos.filter(id => id !== action.payload)
            : [...state.likedPhotos, action.payload],
        };
      case 'TOGGLE_LIGHT': // Add case for toggling light mode
        return {
          ...state,
          light: state.light === 'light' ? 'dark' : 'light',
        };
      default:
        throw new Error('Unexpected action');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
      .catch((error) => console.error("Fetching photos failed:", error));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }))
      .catch((error) => console.error("Fetching topics failed:", error));
  }, []);

  const toggleModal = (selectedPhoto) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: selectedPhoto });
  };

  const toggleLike = (photoId) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: photoId });
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTOS_BY_TOPIC', payload: data }))
      .catch((error) => console.error(`Fetching photos for topic ${topicId} failed:`, error));
  };

  const toggleLight = () => { // Define toggleLight function
    dispatch({ type: 'TOGGLE_LIGHT' });
  };

  return { state, toggleModal, toggleLike, fetchPhotosByTopic, toggleLight }; // Include toggleLight in the return object
};

export default useApplicationData;