import React,{memo} from "react";

export const PhotogalleryContainer = memo( ({ photo, toggleLike }) => {
  return (
    <div className="image-button">
      <img src={photo?.src?.medium} alt="heyy" />
      <button onClick={() => toggleLike(photo?.id)}>
        {photo?.liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
});
