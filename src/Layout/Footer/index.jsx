import React from "react";
import className from "classnames/bind";

import classes from "./Footer.module.css";
import Button from "../../components/Button";

import images from "../../assets";

const cx = className.bind(classes);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("footer-about")}>
        <li>
          <h3>About Tech-E</h3>
        </li>
        <li>
          Tech-E là phần mềm, nền tảng cho các nhà cung cấp để bán những sản
          phẩm về công nghệ và cho nhưng khách hàng tìm mua những sản phầm họ
          cần.
        </li>
      </ul>
      <ul className={cx("footer-contact")}>
        <li>
          <h3>Tổng đài kỹ thuật</h3>
        </li>
        <li>Mua hàng: 02131231231</li>
        <li>Mua hàng: 02131231231</li>
        <li>Mua hàng: 02131231231</li>
      </ul>
      <ul className={cx("footer-pay")}>
        <li>
          <h3>Thanh toán</h3>
        </li>
        <div className={cx("btn")}>
          <Button className={cx("img-pay")}>
            <img src={images.momo} alt="" />
          </Button>
          <Button className={cx("img-pay")}>
            <img src={images.momo} alt="" />
          </Button>
          <Button className={cx("img-pay")}>
            <img src={images.momo} alt="" />
          </Button>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
