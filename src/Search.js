import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <div className="row">
        <div className="col-7 mt-3 mx-3">
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Enter your city here..."
            autoComplete="off"
            autoFocus="on"
            required
          />
        </div>
        <div className="col-2 gap-3 d-flex mt-3 mx-2">
          <button type="submit" className="btn btn-outline-dark">
            <i className="fas fa-search"></i>
          </button>
          <button type="submit" className="btn btn-outline-dark">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
