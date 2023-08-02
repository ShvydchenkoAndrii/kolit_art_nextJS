import Image from "next/image";
import fbLogo from "@/public/facebook_logo.png";
import instaLogo from "@/public/instagram_logo.png";
import styles from "@/app/components/Contacts/contacts.css";

export default function Contacts() {
  return (
    <div className="contacts">
      <div>
        <h2>Контакти</h2>
      </div>
      <div className="contactsContent">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0745688508614!2d24.032357415675406!3d49.84105637939583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c65967fbb%3A0xde9ca2036fb1f3bb!2z0LLRg9C70LjRhtGPINCh0YLQsNGA0L7RlNCy0YDQtdC50YHRjNC60LAsIDUwLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0ZfQvdCwLCA3OTAwMA!5e0!3m2!1suk!2skz!4v1660397909700!5m2!1suk!2skz"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contactsInfo">
          <div className="location">
            <h3>Адреса</h3>
            <p>м.Львів, вул.Староєврейська, 50</p>
            <p>Кав&apos;ярня-музей &quot;Тепилй п&apos;єц&quot;</p>
          </div>
          <div>
            <p>
              <a href="tel:+380631933394">+380631933394</a>
            </p>
            <p>
              <a href="tel:+380678118838">+380678118838</a>
            </p>
          </div>
          <div className="contactsSocial">
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
      </div>
    </div>
  );
}
