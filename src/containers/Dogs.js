import React from "react";
import { createPhotos } from "../services";

//Components dog photos.
const Dogs = (props) => (
  <div className="photo-container">
    <h2>Dogs</h2>
    <ul>{createPhotos(props.photos)}</ul>
  </div>
);

export default Dogs;
