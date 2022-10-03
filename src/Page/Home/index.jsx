import React from "react";
import className from "classnames/bind";

import classes from "./Home.module.css";
import Header from "../../Layout/Header";

import Menu from "../../components/Menu";
import Slide from "../../components/Slide";

import Card from "../../components/Card";
import Footer from "../../Layout/Footer";

import Button from "../../components/Button";

const cx = className.bind(classes);
function Home() {
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
      <main>
        <section className={cx("section-trend")}>
          <h2 className={cx("trend-title")}>Xu hướng mua sắm</h2>
          <div className={cx("wrapper")}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className={cx("view-all")}>
            <Button outline>Xem tất cả</Button>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
