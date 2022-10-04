import React from "react";
import className from "classnames/bind";

import classes from "./Home.module.css";

import Card from "../../components/Card";

import Button from "../../components/Button";

const cx = className.bind(classes);
function Home() {
  return (
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
  );
}

export default Home;
