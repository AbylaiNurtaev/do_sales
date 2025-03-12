import React from "react";
import s from "./FirstSlide.module.sass";

function FirstSlide() {
  return (
    <div className={s.container}>
      <img src="/images/logo.svg" className={s.logo} alt="" />
      <img
        src="/images/phone.svg"
        className={s.phone}
        alt=""
        onClick={() =>
          (window.location.href =
            "https://salebot.site/4ea45958eaf810ac3222774b99c8b06f_6?utm_medium=creative&utm_source=site")
        }
      />
      <h1 className={s.title}>Инновационная система продаж под ключ </h1>
      <p className={s.par}>
        Если у вас есть эти проблемы – <br />
        <span>вы теряете деньги</span>
      </p>
    </div>
  );
}

export default FirstSlide;
