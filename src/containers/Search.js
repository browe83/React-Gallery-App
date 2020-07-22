import React from "react";
import { createPhotos } from "../services";
import NotFound from "../components/NotFound";

/*Component renders photos of a search request.  
Conditionally renders pages depending on whether the search returns any results.  
Also provides a lodading indicator.*/
const Search = ({ photos, loading }) => (
  <>
    {loading ? (
      <div className="photo-container">
        <h1>Loading...</h1>
      </div>
    ) : photos.length > 0 ? (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{createPhotos(photos)}</ul>
      </div>
    ) : (
      <NotFound />
    )}
  </>
);

export default Search;
