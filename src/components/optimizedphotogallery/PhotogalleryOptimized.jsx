import React, { useCallback } from "react";
import usePhotoGallery from "../photogallery/usePhotoGallery";
import { PhotogalleryContainer } from "../photogalleryContainer";

const Photogalleryoptimized = () => {
  const { data, setData } = usePhotoGallery();

  console.log(data);

  const toggleLike = useCallback(
    (id) => {
      setData((prevData) => {
        return prevData.map((photo) => {
          if (photo.id === id) {
            return {
              ...photo,
              liked: !photo.liked,
            };
          }
          return photo;
        });
      });
    },
    [setData]
  );

  return (
    <div>
      <h1>photos</h1>
      <div className="image-container">
        {data?.map((photo) => (
          <PhotogalleryContainer
            key={photo?.id}
            photo={photo}
            toggleLike={toggleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default Photogalleryoptimized;
