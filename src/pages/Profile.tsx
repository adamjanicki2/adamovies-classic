import { useParams } from "react-router-dom";
import Back from "src/components/Back";
import { findReviews, getUser } from "src/data/ops";
import NotFound from "src/pages/NotFound";
import { Id } from "src/types";
import { resizePFP } from "src/util";
import "src/pages/profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { MiniCard } from "src/components/Card";

const Profile = () => {
  const params = useParams();
  let id: Id = 0;
  try {
    id = parseInt(params.id || "");
  } catch {
    return <NotFound />;
  }
  const user = getUser(id);
  if (!user) {
    return <NotFound />;
  }
  document.title = `${user.admin ? "Admin" : "User"}: ${
    user.username
  } | Adamovies`;
  const reviews = findReviews({ admin: id });
  const hasReviews = reviews.length > 0;
  return (
    <div className="flex flex-column items-center w-100">
      <Back />
      {user.admin && <h1 className="tc">(Admin)</h1>}
      <img
        alt=""
        src={resizePFP(user.picture, 400)}
        className="profile-pfp br-25"
      />
      <div className="flex items-center">
        <h1 className="mv0 fw7" style={{ fontSize: "42pt" }}>
          {user.username}
        </h1>
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="check-icon ml2"
          size="3x"
        />
      </div>
      <div className="bio-container flex flex-wrap items-center">
        <BioItem title="Currently Watching" content={user.currentlyWatching} />
        <BioItem title="Favorite Movie" content={user.favoriteMovie} />
        <BioItem title="Favorite TV Show" content={user.favoriteShow} />
        <BioItem title="Bio" content={user.bio} />
      </div>
      {hasReviews && (
        <>
          <hr className="profile-line" />
          <h1 style={{ fontSize: "54px" }} className="fw4 tc">
            {user.username}'s Reviews
          </h1>
          <div className="w-100 ph1 flex flex-wrap justify-center">
            {reviews.map((review) => (
              <MiniCard key={review.id} review={review} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const BioItem = ({ title, content }: { title: string; content: string }) => (
  <div style={{ flexGrow: 1, flexBasis: 0 }} className="tc">
    <h1 className="bio-title">{title}</h1>
    <h2>{content}</h2>
  </div>
);

export default Profile;
