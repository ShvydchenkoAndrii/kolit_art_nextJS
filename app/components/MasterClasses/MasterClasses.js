import Image from "next/image";
import mcItem1 from "@/public/adult_mc.jpg";
import mcItem2 from "@/public/children2.jpg";
import mcItem3 from "@/public/individual2.jpg";
import mcItem4 from "@/public/planner.JPG";
import mcItem5 from "@/public/sertificate.JPG";
import mcItem6 from "@/public/prices.JPG";
import styles from "@/app/components/MasterClasses/masterClasses.css";

export default function MasterClasses() {
  const masterClasses = [
    { bgImage: mcItem1, name: "Групові майстер-класи" },
    { bgImage: mcItem2, name: "Дитячі майстер-класи" },
    { bgImage: mcItem3, name: "Індивідуальні майстер-класи" },
    { bgImage: mcItem4, name: "Пленер" },
    { bgImage: mcItem5, name: "Подарункові сертифікати" },
    { bgImage: mcItem6, name: "Ціни" },
  ];

  return (
    <div className="mc-content">
      <div>
        <h2>Майстер-класи</h2>
      </div>
      <div className="mc-list">
        {masterClasses.map((item, index) => {
          return (
            <div className="mc-item" key={index}>
              <Image src={item.bgImage} alt={item.name} />
              <p className="mc-desc">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
