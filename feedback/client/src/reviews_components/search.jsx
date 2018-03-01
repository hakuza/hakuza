import React from "react";

export function Search(props) {
  return (
    <div id="searchContainer">
      {props.header ? (
        <h3>
          Reviews mentioning <i>{`"${props.header}"`}</i>
        </h3>
      ) : (
        <h3>Reviews</h3>
      )}
      <form>
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
      </form>
    </div>
  );
}
