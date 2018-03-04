import React from "react";

export function Search(props) {
  return (
    <div id="searchContainer">
      {props.header ? (
        <div className="subTitle">
          Reviews mentioning <i>{`"${props.header}"`}</i>
        </div>
      ) : (
        <div className="subTitle">Reviews</div>
      )}

      <input
        type="search"
        id="searchField"
        placeholder="Search in Reviews"
        onChange={props.change}
        onKeyUp={props.search}
      />
      <div className="searchButton" onClick={props.search} />
    </div>
  );
}
