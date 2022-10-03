import React from "react";
import className from "classnames/bind";

import classes from "./Card.module.css";
import images from "../../assets";
import { RateIcon, CartIcon } from "../Icons";
import Button from "../Button";
const cx = className.bind(classes);
function Card() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sale")}>Giảm 50%</div>
      <img src={images.product} alt="" />
      <div className={cx("product-desc")}>
        <div className={cx("product-name")}>
          <p>Iphone 13 Pro Max 128GB Chính hãng</p>
        </div>
        <p className={cx("price-origin")}>10.000.000 đ</p>
        <p className={cx("price-sale")}>9.000.000 đ</p>
        <div className={cx("rate")}>
          <RateIcon />
          <RateIcon />
          <RateIcon />
          <RateIcon />
          <RateIcon />
        </div>
        <Button
          primary
          icon={<CartIcon />}
          className={cx("product-btn")}
        ></Button>
      </div>
    </div>
  );
}

export default Card;
