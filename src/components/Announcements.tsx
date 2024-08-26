import announcements from "src/data/announcements";
import { populateAnnouncement } from "src/data/ops";
import { HydratedAnnouncement } from "src/types";
import "src/components/announcements.css";
import { formatDate } from "src/util";
import { UnstyledLink } from "src/components/Link";

const Announcements = () => {
  let allAnnouncements = announcements.map(populateAnnouncement);
  allAnnouncements = allAnnouncements.sort((a, b) => b.timestamp - a.timestamp);
  return (
    <div className="announcements-container">
      <div className="single-announcement">
        <div className="scrolling-announcements">
          {allAnnouncements.map((announcement) => (
            <SingleAnnouncement announcement={announcement} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SingleAnnouncement = ({
  announcement,
}: {
  announcement: HydratedAnnouncement;
}) => {
  return (
    <div>
      <h2 className="pa0 mb0">{announcement.title}</h2>
      <div className="flex items-center flex-wrap">
        <h3 className="mh1 fw5">
          {formatDate(announcement.timestamp, true)} |{" "}
        </h3>
        <div className="flex items-center">
          <img
            src={announcement.admin.picture}
            height="18px"
            width="18px"
            alt=""
            className="mh1 ba bw1 b--black br-25"
          />
          <UnstyledLink
            to={`/user/${announcement.admin.id}`}
            className="underline-hover"
          >
            <h3 className="fw5">{announcement.admin.username}</h3>
          </UnstyledLink>
        </div>
      </div>
      <p>{announcement.content}</p>
      <hr />
    </div>
  );
};

export default Announcements;
