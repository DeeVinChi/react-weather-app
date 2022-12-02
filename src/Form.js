import React, { useState } from "react";

export default function Form() {
  let [city, setCity] = useState("");

  function getValue(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div className="row mt-4">
          <div className="col-8">
            <input
              type="search"
              onChange={getValue}
              placeholder="Enter City"
              autoComplete="off"
              autoFocus="on"
              className="form-control shadow"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
