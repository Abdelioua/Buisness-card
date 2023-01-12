import { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Share from "./components/Share";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showSlide, SetShowSlide] = useState(true);

  return (
    <div className="App overflow-hidden">
      {showSlide ? (
        <>
          <Header />
          <Contact />
          <Footer SetShowSlide={SetShowSlide} />
        </>
      ) : (
        <AnimatePresence mode="wait">
          <Share SetShowSlide={SetShowSlide} />
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
