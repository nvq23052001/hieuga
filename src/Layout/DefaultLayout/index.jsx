import React from "react";
import classNames from "classnames/bind";

import classes from "./DefaultLayout.module.css";
import Header from "../Header";
import Menu from "../../components/Menu";
import Slide from "../../components/Slide";
import Footer from "../Footer";

const cx = classNames.bind(classes);
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("nav")}>
        <section className={cx("section-menu")}>
          <Menu />
        </section>
        <section className={cx("section-slide")}>
          <Slide />
        </section>
      </div>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default DefaultLayout;
