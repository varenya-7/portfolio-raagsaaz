import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useActiveSection } from "./hooks/useActiveSection";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Media from "./components/Media/Media";
import Timeline from "./components/Timeline/Timeline";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import BookingForm from "./components/Hero/BookingForm";
import BookingConfirmation from "./components/Hero/BookingConfirmation";

// ✅ Home Page Structure
const HomePage = ({ isMenuOpen, setIsMenuOpen, activeSection }) => (
  <>
    <Header
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      activeSection={activeSection}
    />
    <Hero />
    <About />
    <Media />
    <Timeline />
    <Events />
    <Footer />
  </>
);

// ✅ Main App Component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <Router>
      <div className="bg-black text-white min-h-screen overflow-x-hidden w-screen">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                activeSection={activeSection}
              />
            }
          />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
