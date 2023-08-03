"use client";
import Image from "next/image";
import mcItem1 from "@/public/adult_mc.jpg";
import mcItem2 from "@/public/children2.jpg";
import mcItem3 from "@/public/individual2.jpg";
import mcItem4 from "@/public/planner.JPG";
import mcItem5 from "@/public/sertificate.JPG";
import mcItem6 from "@/public/prices.JPG";
import styles from "@/app/components/MasterClasses/masterClasses.css";
import { useState } from "react";

export default function MasterClasses() {
  const masterClasses = [
    {
      bgImage: mcItem1,
      name: "Групові майстер-класи",
      desc: "Some text",
    },
    { bgImage: mcItem2, name: "Дитячі майстер-класи", desc: "Some text" },
    {
      bgImage: mcItem3,
      name: "Індивідуальні майстер-класи",
      desc: "Some text",
    },
    { bgImage: mcItem4, name: "Пленер", desc: "Some text" },
    { bgImage: mcItem5, name: "Подарункові сертифікати", desc: "Some text" },
    { bgImage: mcItem6, name: "Ціни", desc: "Some text" },
  ];

  const [backCards, setBackCards] = useState(null);

  const showBackCard = (index) => {
    setBackCards((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mc-content">
      <div>
        <h2>Майстер-класи</h2>
      </div>
      <div className="mc-list">
        {masterClasses.map((item, index) => {
          return (
            <div
              className={`${
                backCards === index ? "mc-item active" : "mc-item"
              }`}
              key={index}
              onClick={() => {
                showBackCard(index);
              }}
            >
              <div className="card-conteiner">
                <div className="card-front">
                  <Image
                    src={item.bgImage}
                    alt={item.name}
                    className="mc-item-img"
                  />
                  <p className="mc-name">{item.name}</p>
                </div>
                <div className="card-back">
                  <p className="mc-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
