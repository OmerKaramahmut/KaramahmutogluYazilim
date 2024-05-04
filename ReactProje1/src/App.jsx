import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./App.css";
import AboutContent from "./Components/AboutContent";
import Packet from "./Components/Packet";
import PacketInfo from "./Components/PacketInfo";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutContent />
      <Packet />
      <PacketInfo/>
      <Footer/>
    </>
  );
}

export default App;
