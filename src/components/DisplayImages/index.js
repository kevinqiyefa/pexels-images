import React, { useState } from 'react';
import Backdrop from '../BackDrop';
import './style.css';

function DisplayImages({ images, nextPage, prevPage, nextPageAndPrevPage }) {
  const [viewPhoto, setViewPhoto] = useState('');
  const [isView, setIsView] = useState(false);

  const viewImage = imgUrl => {
    setViewPhoto(imgUrl);
    setIsView(true);
  };

  const closeViewMode = () => {
    setIsView(false);
  };

  const showPhotos = () => {
    if (images) {
      if (images.length > 0) {
        return images.map(image => (
          <img
            key={image.id}
            alt="photos"
            src={image.src.tiny}
            onClick={() => viewImage(image.src.large2x)}
          />
        ));
      } else {
        return <p>Sorry, no pictures found!</p>;
      }
    }
  };
  return (
    <div className="display-images-wrapper">
      <div className="display-images">{showPhotos()}</div>

      <div className="show_img_navigation">
        <button
          type="button"
          disabled={prevPage ? false : true}
          onClick={() => nextPageAndPrevPage(prevPage)}
        >
          <i className="fas fa-chevron-circle-left" />
        </button>
        <button
          type="button"
          disabled={nextPage ? false : true}
          onClick={() => nextPageAndPrevPage(nextPage)}
        >
          <i className="fas fa-chevron-circle-right" />
        </button>
      </div>
      {isView ? (
        <div className="view_photo">
          <Backdrop show={isView} clicked={closeViewMode} />
          <div className="modal">
            <span onClick={closeViewMode}>×</span>
            <img alt="original pic" src={viewPhoto} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default React.memo(DisplayImages);
