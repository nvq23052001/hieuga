import React from "react";
import className from "classnames/bind";

import classes from "./Header.module.css";
import images from "../../assets";
import { SearchIcon, CartIcon } from "../../components/Icons";
import Button from "../../components/Button";

const cx = className.bind(classes);
function Header() {
  return (
    <header>
      <div className={cx("wrapper")}>
        <div className={cx("logo")}>
          <img className={cx("logoImage")} src={images.logo} alt="" />
        </div>
        <div className={cx("search")}>
          <input type="text" className={cx("searchInput")} />
          <button className={cx("searchBtn")}>
            <SearchIcon />
          </button>
        </div>
        <div className={cx("direct")}>
          <Button second icon={<CartIcon />}>
            Giỏ hàng
          </Button>
          <Button outline>Đăng ký</Button>
          <Button primary>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
