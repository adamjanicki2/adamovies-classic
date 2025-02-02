import { Animated, IconButton, Link } from "@adamjanicki/ui";
import Banner from "@adamjanicki/ui/components/Banner";
import { faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onDismiss: () => void;
  open: boolean;
};

const DismissibleBanner = ({ onDismiss, open }: Props) => {
  return (
    <Animated
      visible={open}
      duration={500}
      enter={{ style: { opacity: 1 } }}
      exit={{ style: { opacity: 0 } }}
    >
      <Banner type="info">
        <div className="flex justify-between w-100">
          <span className="mr3">
            <FontAwesomeIcon icon={faInfoCircle} className="" /> This is a
            legacy, readonly version of Adamovies. You can check out the current
            version{" "}
            <Link to="https://adamovies.com" target="_blank" rel="noreferrer">
              here
            </Link>
            .
          </span>
          <IconButton
            style={{ height: "fit-content" }}
            aria-label="dismiss"
            onClick={onDismiss}
            icon={<FontAwesomeIcon icon={faTimes} className="" />}
          />
        </div>
      </Banner>
    </Animated>
  );
};

export default DismissibleBanner;
