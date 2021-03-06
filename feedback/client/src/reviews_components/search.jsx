import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

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
      <div className="searchButton" onClick={props.search}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}
