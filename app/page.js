"use client";
import AboutUs from "./components/About Us/AboutUs";
import Header from "./components/Header/Header";
import MasterClasses from "./components/MasterClasses/MasterClasses";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Naming from "./components/Naming/Naming";
import { Element } from "react-scroll";

export default function Page() {
  return (
    <>
      <Header />

      <Naming />

      <Element name="AboutUs">
        <AboutUs />
      </Element>

      <Element name="MasterClasses">
        <MasterClasses />
      </Element>

      <Element name="Gallery">
        <Gallery />
      </Element>

      <Element name="Contacts">
        <Contacts />
      </Element>
      <Footer />
    </>
  );
}
