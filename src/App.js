import "./App.css";
import Accreditation from "./components/Accreditation";
import Announcement from "./components/Announcement";
import Blog from "./components/Blog";
import Book from "./components/Book";
import Broadcast from "./components/Broadcast";
import Facilities from "./components/Facilities";
import Health from "./components/Health";
import HealthCare from "./components/HealthCare";
import HealthCondition from "./components/HealthCondition";
import HealthRisk from "./components/HealthRisk";
import HeroSection from "./components/HeroSection";
import Location from "./components/Location";
import Modality from "./components/Modality";
import Navbar from "./components/Navbar";
import OurJourney from "./components/OurJourney";
import Popular from "./components/Popular";
import Presenting from "./components/Presenting";
import Recommend from "./components/Recommend";
import Testimonial from "./components/Testimonial";
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
      <Recommend />
      <Testimonial />
      <Blog />
      <Accreditation />
      <Broadcast />
      <Presenting />
      <OurJourney />
      <Location />
    </>
  );
}

export default App;
