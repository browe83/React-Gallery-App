import apiKey from "./config";
import React from "react";

const performSearch = async (query = "cats") => {
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1&limit=24`;
  const photoData = await fetch(url);
  return photoData.json();
};

const createPhotoUrl = (photo) =>
  `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

const createPhotos = (photos) => {
  return photos.map((p) => (
    <li key={p.id}>
      <img src={createPhotoUrl(p)} alt="" />
    </li>
  ));
};
export { performSearch, createPhotoUrl, createPhotos };
