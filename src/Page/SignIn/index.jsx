import React from "react";
import className from "classnames/bind";

import classes from "./SignIn.module.css";

import images from "../../assets";

import Button from "../../components/Button";

const cx = className.bind(classes);
function SignIn() {
  return (
    <div>
      <header>
        <img src={images.logo} alt="" className={cx("logo")} />
      </header>
      <div className={cx("container")}>
        <div className={cx("logo-center")}>
          <img src={images.logo} alt="" className={cx("logo-center-img")} />
        </div>
        <h1 className={cx("signin")}>Đăng nhập</h1>
        <form action="" className={cx("form")}>
          <div className={cx("form-group")}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={cx("form-group")}>
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" />
          </div>
          <Button primary>Đăng nhập</Button>
        </form>
        <p className={cx("forgot-password")}>Quên mật khẩu?</p>
        <Button outline>Đăng ký</Button>
      </div>
    </div>
  );
}

export default SignIn;
