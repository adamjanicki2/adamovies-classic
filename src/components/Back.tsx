import { UnstyledButton } from "@adamjanicki/ui";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="w-100 pv1" style={{ marginLeft: "2%", marginTop: "2%" }}>
      <UnstyledButton className="f24 scale" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} className="mr1" />
        Back
      </UnstyledButton>
    </div>
  );
};

export default Back;
