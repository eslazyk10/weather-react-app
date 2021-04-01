import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-5">
            <input id="Search-form" type="search" placeholder="Search a city" />
          </div>
        
          <div className="col-7">
            <input id="Search-Btn" type="submit" value="Search" />
          
            <input id="Location-Btn" type="submit" value="Current Location" />
          </div>
        </div>
      </form>
    </div>
  );
}