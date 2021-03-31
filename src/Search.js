import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-12">
            <input id="Search-form" type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input id="Search-Btn" type="submit" value="Search" />
          </div>
          <div className="col-6">
            <input id="Location-Btn" type="submit" value="Current Location" />
          </div>
        </div>
      </form>
    </div>
  );
}