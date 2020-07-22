import React from "react";
import { createPhotos } from "../services";

//Components cat photos.
const Cats = (props) => (
  <div className="photo-container">
    <h2>Cats</h2>
    <ul>{createPhotos(props.photos)}</ul>
  </div>
);

export default Cats;
