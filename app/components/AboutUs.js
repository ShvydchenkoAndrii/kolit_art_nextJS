import Image from "next/image";
import paintBrush from "@/public/paintbrush.svg";
import palette from "@/public/palette.svg";
import brush from "@/public/brush.svg";
import fillDrip from "@/public/fill-drip.svg";

export default function AboutUs() {
  const description = [
    { icon: paintBrush, desc: "1. Пензлик sadasd" },
    { icon: palette, desc: "2. Палітра" },
    { icon: brush, desc: "3. Великий пензлик" },
    { icon: fillDrip, desc: "4. Банка фарби" },
  ];
  return (
    <div className="aboutUs">
      <div>
        <h2>Про нас</h2>
      </div>
      <div>
        {description.map((item, index) => {
          return (
            <div className="aboutUsDescr" key={index}>
              <Image className="descrImg" src={item.icon} alt="Art item" />
              <p className="textDescr">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
