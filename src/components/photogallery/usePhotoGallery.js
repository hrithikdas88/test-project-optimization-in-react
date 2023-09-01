import { useEffect, useState } from "react";

const usePhotoGallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(
        "https://api.pexels.com/v1/curated?page=2&per_page=40",
        {
          headers: {
            Authorization:
              "z7WLXSZGpoTzrzcOctxFmJVdTHxdG8dbpO98Oz5XIdwAPFykjDADHNl0",
          },
        }
      );
      const res = await responce.json();
      setData(res.photos);

    };
    fetchData()
  }, []);


  

  return {data, setData};
};

export default usePhotoGallery;
