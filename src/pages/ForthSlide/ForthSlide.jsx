import React from "react";
import s from "./ForthSlide.module.sass";

function ForthSlide() {
  return (
    <div className={s.container}>
      <img src="/images/logo.svg" className={s.logo} alt="" />
      <h1 className={s.title}>Как мы выстраиваем 
      экосистему в бизнесе?</h1>
      <div className={s.steps}>
        <img src="/desktopSteps/5.svg" className={s.first} alt="" />
        <img src="/desktopSteps/6.svg" className={s.first} alt="" />
      </div>
    </div>
  );
}

export default ForthSlide;
