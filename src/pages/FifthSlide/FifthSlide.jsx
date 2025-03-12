import React from "react";
import s from "./FifthSlide.module.sass";

function FifthSlide() {
  return (
    <div className={s.container}>
      <img src="/images/logo.svg" className={s.logo} alt="" />
      <div className={s.images}>
        <img src="/images/tar123.png" alt="" />
        <img src="/images/tarif22.png" alt="" />
        <img src="/images/tarif33.png" alt="" />
      </div>
    </div>
  );
}

export default FifthSlide;
