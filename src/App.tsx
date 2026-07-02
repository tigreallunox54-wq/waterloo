import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RailDivider from "./components/RailDivider";
import Story from "./components/Story";
import Food from "./components/Food";
import Drinks from "./components/Drinks";
import Events from "./components/Events";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <RailDivider bg="bg-ink" />
      <Story />
      <RailDivider bg="bg-cream" stroke="#1B3A2F" />
      <Food />
      <Drinks />
      <RailDivider bg="bg-cream" stroke="#1B3A2F" />
      <Events />
      <Reviews />
      <Visit />
      <Footer />
    </>
  );
}
