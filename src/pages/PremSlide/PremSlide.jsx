import React from "react";
import s from "./PremSlide.module.sass";

function PremSlide() {
  return (
    <div className={s.container}>
      <img src="/images/logo.svg" className={s.logo} alt="" />
      <div className={s.images}>
        <img src="/images/b1.svg" alt="" />
        <img src="/images/b22.svg" alt="" />
        <img src="/images/b3.svg" alt="" />
        <img src="/images/b4.svg" alt="" />
      </div>
      <img src="/images/line.svg" className={s.line} alt="" />
      <div className={s.images} style={{ paddingTop: "20px" }}>
        <img src="/images/b5.svg" alt="" />
        <img src="/images/b6.svg" alt="" />
        <img src="/images/b7.svg" alt="" />
        <img src="/images/b8.svg" alt="" />
      </div>
    </div>
  );
}

export default PremSlide;
