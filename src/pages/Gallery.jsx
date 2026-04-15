import { useState, useEffect } from "react";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async (abortSignal) => {
    const response = await fetch("/photos.json", { signal: abortSignal });
    const results = await response.json();
    setPhotos(results);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchPhotos(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>Gallery</h2>

      {photos.map((photo) => (
        <figure key={photo.id}>
          <img src={photo.url} alt={photo.alt} />
        </figure>
      ))}
    </div>
  );
}
