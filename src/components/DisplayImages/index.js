import React, { useState } from 'react';

function DisplayImages({ images, nextPage, prevPage }) {
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
            src={image.src.medium}
            onClick={() => viewImage(image.src.original)}
          />
        ));
      } else {
        return <p>Sorry, no pictures found!</p>;
      }
    }
  };
  return (
    <div>
      {showPhotos()}
      {isView ? (
        <div>
          <div onClick={closeViewMode}>X</div>
          <img alt="original pic" src={viewPhoto} />
        </div>
      ) : null}
    </div>
  );
}

export default React.memo(DisplayImages);
