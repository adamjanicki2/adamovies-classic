import { useLocation } from "react-router-dom";
import Card from "src/components/Card";
import { randomReview } from "src/data/ops";
import logo from "src/images/logo.png";

const NotFound = () => {
  const { pathname } = useLocation();
  const review = randomReview();
  return (
    <div className="flex flex-column items-center w-100">
      <img alt="" src={logo} className="mv2" />
      <h1 className="tc fw3" style={{ fontSize: 80, margin: "16px 8px" }}>
        404 Not Found
      </h1>
      <h2 className="tc">Oops! Page "{pathname}" couldn't be found.</h2>
      <h2 className="tc mt0">Try checking out this random review!</h2>
      <Card review={review} />
    </div>
  );
};

export default NotFound;
