import React from "react";
import s from "./FifthSlide.module.sass";

function FifthSlide() {
  return (
    <div className={s.container}>
      <img src="/images/logo.svg" className={s.logo} alt="" />
      <div className={s.images}>
        <img src="/images/tarif1.svg" alt="" />
        <img src="/images/tarif2.svg" alt="" />
        <img src="/images/tarif3.svg" alt="" />
      </div>
    </div>
  );
}

export default FifthSlide;
