import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import MasterClasses from "./components/MasterClasses";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Naming from "./components/Naming";

export default function Page() {
  return (
    <>
      <Header />
      <Naming />
      <AboutUs />
      <MasterClasses />
      <Gallery />
      <Contacts />
      <Footer />
    </>
  );
}
