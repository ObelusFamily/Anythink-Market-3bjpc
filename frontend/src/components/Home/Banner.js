import React, { useState } from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [showInput, setShowInput] = useState(false);

  const searchHandler = (ev) => {
    ev.preventDefault();
    const title = ev.target.value;
    if (title.length >= 3) {
      props.onSearchChange(
        title,
        (page) => agent.Items.byTitle(title, page),
        agent.Items.byTitle(title)
      );
    } else {
      props.onSearchChange(
        "",
        (page) => agent.Items.all(page),
        agent.Items.all()
      );
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="input-group input-group-lg align-items-center justify-content-center">
          <span className="pr-1">A Place to </span>
          <span
            id="get-part"
            className="pr-1"
            onClick={() => setShowInput(true)}
          >
            get
          </span>
          {showInput ? (
            <input
              id="search-box"
              className="form-control ml-3 mr-3 p-3 rounded border-0"
              type="text"
              placeholder="What is it that you truly desire?"
              onChange={searchHandler}
            />
          ) : (
            <></>
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
