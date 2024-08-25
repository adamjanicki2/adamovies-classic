import { UnstyledLink } from "src/components/Link";
import PageWrapper from "src/components/PageWrapper";
import "src/pages/stats.css";
import logo from "src/images/logo.png";

const Stats = () => (
  <PageWrapper
    title="Site Statistics"
    documentTitle="Site Statistics | Adamovies"
  >
    <div className="stats-container flex flex-column items-center">
      <ul>
        <li className="stats-text">
          We have <strong>10</strong> Registered users
        </li>
        <li className="stats-text">
          <strong>7</strong> of those users are admins
        </li>
        <li className="stats-text">
          There are <strong>63</strong> admin reviews totaling{" "}
          <strong>27517</strong> words
        </li>
        <li className="stats-text">
          Adamovies users have left <strong>86</strong> comments
        </li>
        <li className="stats-text">
          Reviews have received <strong>104</strong> total likes
        </li>
        <li className="stats-text">
          The most liked review is{" "}
          <UnstyledLink to={`/review/13`} className="b movie-link">
            Interstellar
          </UnstyledLink>{" "}
          with <strong>6</strong> likes
        </li>
        <li className="stats-text">
          The most commented review is{" "}
          <UnstyledLink to={`/review/13`} className="b movie-link">
            Interstellar
          </UnstyledLink>{" "}
          with <strong>5</strong> comments
        </li>
        <li className="stats-text">
          The average review rating is <strong>81%</strong>
        </li>
        <li className="stats-text">
          <UnstyledLink to={`/review/13`} className="b movie-link">
            Interstellar
          </UnstyledLink>{" "}
          is the highest rated review with a <strong>100%</strong>
        </li>
        <li className="stats-text">
          <UnstyledLink to={`/review/18`} className="b movie-link">
            The Crew S1E1
          </UnstyledLink>{" "}
          is the lowest rated review with a <strong>20%</strong>
        </li>
        <li className="stats-text">
          Admins have posted <strong>24</strong> announcements
        </li>
      </ul>
      <img className="mb3" src={logo} alt="" />
    </div>
  </PageWrapper>
);

export default Stats;
