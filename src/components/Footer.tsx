import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnstyledLink } from "src/components/Link";
import "src/components/footer.css";

const Footer = () => (
  <footer className="flex flex-column w-100 items-center justify-center white fw4 pv3 pre">
    <div className="flex items-center pre">
      <UnstyledLink to="/faq" className="footer-links">
        FAQ
      </UnstyledLink>
      <div> • </div>
      <UnstyledLink to="/about" className="footer-links">
        About Adamovies
      </UnstyledLink>
      <div> • </div>
      <UnstyledLink to="/statistics" className="footer-links">
        Stats
      </UnstyledLink>
    </div>
    <div className="flex flex-column">
      <hr className="white w-100" />
      <div className="flex items-center">
        <div>Est. 2021 Built from scratch by Adam •</div>
        <UnstyledLink
          rel="noreferrer"
          target="_blank"
          className="footer-icons"
          to="mailto:adamoviessite@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
        </UnstyledLink>
        <div> • </div>
        <UnstyledLink
          rel="noreferrer"
          target="_blank"
          className="footer-icons"
          to="https://www.instagram.com/adamoviesofficial/"
        >
          <FontAwesomeIcon icon={faInstagram} size={"2x"} />
        </UnstyledLink>
      </div>
    </div>
  </footer>
);

export default Footer;
