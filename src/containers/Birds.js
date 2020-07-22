import React from "react";
import { createPhotos } from "../services";

//Components bird photos.
const Birds = (props) => (
  <div className="photo-container">
    <h2>Birds</h2>
    <ul>{createPhotos(props.photos)}</ul>
  </div>
);

export default Birds;
