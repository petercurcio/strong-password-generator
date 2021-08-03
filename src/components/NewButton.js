import React from "react";
import "./NewButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const NewButton = (props) => {
  const clickHandler = () => {
    props.onClick();
    document.querySelector(".title-text").classList.toggle("bumpText");
    document.querySelector(".btn-5b-before").classList.toggle("btn-5b-active");
    setTimeout(() => {
      document.querySelector(".title-text").classList.toggle("bumpText");
      document
        .querySelector(".btn-5b-before")
        .classList.toggle("btn-5b-active");
    }, 1000);
  };
  return (
    <button onClick={clickHandler} className="btn btn-5 btn-5b" type="button">
      <div
        className="btn-5b-before"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          lineHeight: 2.5,
          fontSize: "180%",
          WebkitTransition: "all 0.3s",
          MozTransition: "all 0.3s",
          transition: "all 0.3s",
        }}
      >
        <FontAwesomeIcon className="fa-icon-check" icon={faCheck} />
      </div>

      <span className="title-text">{props.title}</span>
    </button>
  );
};

export default NewButton;
