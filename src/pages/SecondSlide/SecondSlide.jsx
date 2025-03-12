import React from "react";
import s from "./SecondSlide.module.sass";

function SecondSlide() {
  return (
    <div className={s.container}>
      <img src="/images/logo.svg" className={s.logo} alt="" />
      <h1 className={s.title}>Как мы выстраиваем 
      экосистему в бизнесе?</h1>
      <div className={s.steps}>
        <img src="/desktopSteps/1.svg" className={s.first} alt="" />
        <img src="/desktopSteps/2.svg" className={s.first} alt="" />
      </div>
    </div>
  );
}

export default SecondSlide;
