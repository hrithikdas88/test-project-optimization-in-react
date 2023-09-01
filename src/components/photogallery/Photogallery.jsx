import React from "react";
import usePhotoGallery from "./usePhotoGallery";
import "./Photogallery.scss";
import { PhotogalleryContainer } from "../photogallerycontainer/photogallerycontainer";

const Photogallery = () => {
  const { data, setData } = usePhotoGallery();

  console.log(data);

  const toggleLike = (id) => {
    const updatedData = data.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          liked: !photo.liked,
        };
      }
      return photo;
    });

    setData(updatedData);
  };



  return (
    <div>
      <h1>photos</h1>
      <div className="image-container">
        {data.map((photo) => (
          <>
            <PhotogalleryContainer photo={photo} toggleLike={toggleLike} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Photogallery;
