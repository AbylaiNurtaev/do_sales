import React from "react";
import s from "./SixSlide.module.sass";

function SixSlide() {
  return (
    <div className={s.container}>
      <img src="/images/logo.svg" className={s.logo} alt="" />
      <div className={s.images}>
        <img src="/images/block1.svg" alt="" />
        <img src="/images/block2.svg" alt="" />
      </div>
    </div>
  );
}

export default SixSlide;
