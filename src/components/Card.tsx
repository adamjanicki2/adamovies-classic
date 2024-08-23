import {
  faComment,
  faFilm,
  faHeart,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnstyledLink } from "src/components/Link";
import type { HydratedReview } from "src/types";
import { formatDate, showInfo } from "src/util";
import "src/components/card.css";

type Props = {
  review: HydratedReview;
};

const typeToIcon = {
  show: faTv,
  movie: faFilm,
} as const;

const Card = ({ review }: Props) => {
  return (
    <div className="flex flex-column items-center card-wrapper pb3">
      <UnstyledLink
        to={`/review/${review.id}`}
        className="flex flex-column items-center"
      >
        <h1 className="tc mb0 fw7">
          {review.title} ({review.releaseYear})
        </h1>
        <h2
          className="fw4 mv2 pb1"
          style={{ whiteSpace: "pre-wrap", fontSize: 24 }}
        >
          <FontAwesomeIcon size="lg" icon={typeToIcon[review.type]} /> •{" "}
          {review.genre} • {showInfo(review)}
        </h2>
        <img src={review.poster} alt="" className="card-poster" />
        <div
          className="tc fw6 mv3"
          style={{ whiteSpace: "pre-wrap", fontSize: 24 }}
        >
          {formatDate(review.timestamp)} • {review.rating}% •{" "}
          <FontAwesomeIcon icon={faHeart} size="xl" className="heart mh1" />{" "}
          {review.likes.length} •{" "}
          <FontAwesomeIcon icon={faComment} className="comment mh1" size="xl" />{" "}
          {review.comments}
        </div>
      </UnstyledLink>
      <div className="flex items-center">
        <img
          src={review.admin.picture}
          alt=""
          className="mr1 br-25 ba b--black bw1"
          width={28}
          height={28}
        />
        <UnstyledLink
          to={`/user/${review.admin.id}`}
          className="underline-hover"
        >
          <h3 className="fw4 ma0 pa0">{review.admin.username}</h3>
        </UnstyledLink>
      </div>
    </div>
  );
};

export default Card;
