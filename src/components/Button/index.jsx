import React from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  primary,
  outline,
  second,
  rounded = false,
  small = false,
  large = false,
  text = false,
  className,
  icon,
  onClick,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    second,
    large,
    text,
    rounded,
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
      {icon && <span className={cx("icon")}>{icon}</span>}
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

export default Button;
