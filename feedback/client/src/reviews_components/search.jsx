import React from "react";

export function Search(props) {
  return (
    <div>
      <h3>Reviews</h3>
      <input
        type="text"
        id="searchField"
        onKeyUp={props.search}
        placeholder="Search in Reviews"
      />
      <a className="searchButton">Search</a>
    </div>
  );
}
