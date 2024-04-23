import "./App.css";
import Announcement from "./components/Announcement";
import Book from "./components/Book";
import Facilities from "./components/Facilities";
import Health from "./components/Health";
import HealthCare from "./components/HealthCare";
import HealthCondition from "./components/HealthCondition";
import HealthRisk from "./components/HealthRisk";
import HeroSection from "./components/HeroSection";
import Modality from "./components/Modality";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Book />
      <Facilities />
      <Health />
      <Popular />
      <HealthRisk />
      <HealthCondition />
      <Modality />
      <Announcement />
      <WhyChooseUs />
      <HealthCare />
    </>
  );
}

export default App;
