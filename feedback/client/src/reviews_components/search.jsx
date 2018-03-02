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
      <input //have to make this work somehow
        type="submit"
        className="searchButton"
        onClick={props.search}
      />
    </div>
  );
}
