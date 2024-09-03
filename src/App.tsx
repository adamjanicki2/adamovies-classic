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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@adamjanicki/ui";
import { useBanner } from "src/hooks";

const App = () => {
  const { dismissed, dismiss } = useBanner();
  return (
    <BrowserRouter basename="/adamovies-classic">
      {!dismissed && (
        <DismissibleBanner onDismiss={dismiss}>
          <span className="mr3">
            <FontAwesomeIcon icon={faInfoCircle} /> This is a legacy, readonly
            version of Adamovies. You can check out the current version{" "}
            <Link to="https://adamovies.com" target="_blank" rel="noreferrer">
              here
            </Link>
            .
          </span>
        </DismissibleBanner>
      )}
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
