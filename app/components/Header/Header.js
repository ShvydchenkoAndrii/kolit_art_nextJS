"use client";
import React, { useState } from "react";
import Image from "next/image";
import logoIco from "@/public/kolir_art_logo_header.jpg";
import fbLogo from "@/public/facebook_logo.png";
import instaLogo from "@/public/instagram_logo.png";
import styles from "@/app/components/Header/header.css";

export default function Header() {
  const headerList = [
    { name: "Про нас", pagePart: "AboutUs" },
    { name: "Майстер класи", pagePart: "MasterClasses" },
    { name: "Галерея", pagePart: "Gallery" },
    { name: "Контакти", pagePart: "Contacts" },
  ];

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const changeShowBurger = () => {
    setShowBurgerMenu(!showBurgerMenu);
    console.log(showBurgerMenu);
  };

  return (
    <div className="header">
      <div className="headerLogo">
        <Image src={logoIco} alt="kolir art logo" />
      </div>
      <div>
        <div
          onClick={() => {
            changeShowBurger();
          }}
          className={`${
            showBurgerMenu
              ? "showNavBarBurger active headerNavBar"
              : "showNavBarBurger headerNavBar"
          }`}
        >
          {headerList.map((item, index) => {
            return (
              <div key={index}>
                <a href={item.pagePart}>{item.name}</a>
              </div>
            );
          })}
          <div className={`${showBurgerMenu ? "social active" : "social"}`}>
            <a
              href="https://www.facebook.com/profile.php?id=100068535566999"
              target="_blank"
            >
              <Image
                className="socialIcon"
                src={fbLogo}
                alt="facebook logo"
              ></Image>
            </a>
            <a href="https://instagram.com/kolir.art" target="_blank">
              <Image
                className="socialIcon"
                src={instaLogo}
                alt="instagram logo"
              ></Image>
            </a>
          </div>
        </div>

        <div
          className={`${
            showBurgerMenu ? "main-nav__burger active" : "main-nav__burger"
          }`}
          onClick={() => changeShowBurger()}
        >
          <span></span>
        </div>
      </div>
    </div>
  );
}
