import React from "react";
import Image from "next/image";
import logoIco from "@/public/kolir_art_logo.jpg";
import fbLogo from "@/public/facebook_logo.png";
import instaLogo from "@/public/instagram_logo.png";

export default function Header() {
  const headerList = [
    { name: "Про нас", pagePart: "AboutUs" },
    { name: "Майстер класи", pagePart: "MasterClasses" },
    { name: "Галерея", pagePart: "Gallery" },
    { name: "Контакти", pagePart: "Contacts" },
  ];

  return (
    <div className="header">
      <div className="headerLogo">
        <Image src={logoIco} alt="kolir art logo" />
      </div>
      <div className="headerNavBar">
        {headerList.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.pagePart}>{item.name}</a>
            </div>
          );
        })}
      </div>
      <div className="social">
        <a
          href="https://www.facebook.com/profile.php?id=100068535566999"
          target="_blank"
        >
          <Image src={fbLogo} alt="facebook logo"></Image>
        </a>
        <a href="https://instagram.com/kolir.art" target="_blank">
          <Image src={instaLogo} alt="instagram logo"></Image>
        </a>
      </div>
    </div>
  );
}
