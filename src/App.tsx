import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import About from "src/pages/About";
import Home from "src/pages/Home";
import Movies from "src/pages/Movies";
import Shows from "src/pages/Shows";
import Review from "src/pages/Review";
import Profile from "src/pages/Profile";
import FAQ from "src/pages/FAQ";
import Stats from "src/pages/Stats";
import NotFound from "src/pages/NotFound";
import DismissibleBanner from "src/components/DismissibleBanner";

const App = () => {
  const [dismissed, setDismissed] = useState(false);
  return (
    <BrowserRouter basename="/adamovies-classic">
      <DismissibleBanner
        open={!dismissed}
        onDismiss={() => setDismissed(true)}
      />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Shows />} />
        <Route path="/review/:id" element={<Review />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/statistics" element={<Stats />} />
        {/* Make sure this is the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
