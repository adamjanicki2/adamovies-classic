import { IconButton } from "@adamjanicki/ui";
import Banner from "@adamjanicki/ui/components/Banner";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: React.ReactNode;
  onDismiss: () => void;
};

const DismissibleBanner = ({ children, onDismiss }: Props) => {
  return (
    <Banner type="info">
      <div className="flex justify-between w-100">
        {children}
        <IconButton
          style={{ height: "fit-content" }}
          aria-label="dismiss"
          onClick={onDismiss}
          icon={<FontAwesomeIcon icon={faTimes} />}
        />
      </div>
    </Banner>
  );
};

export default DismissibleBanner;
