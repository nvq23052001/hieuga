import React from "react";
import classNames from "classnames/bind";

import classes from "./Slide.module.css";
// import images from "../../assets";

const cx = classNames.bind(classes);
function Slide() {
  return (
    <div className={cx("slide")}>
      {/* <img src={images.slide} alt="" className={cx("slide-image")} /> */}
    </div>
  );
}

export default Slide;
