import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnstyledLink } from "src/components/Link";
import type { HydratedReview } from "src/types";
import { formatDate, showInfo, smallShowInfo, typeToIcon } from "src/util";
import "src/components/card.css";

type Props = {
  review: HydratedReview;
};

const Card = ({ review }: Props) => {
  const info = showInfo(review);
  return (
    <div className="flex flex-column items-center card-wrapper scale pb3">
      <UnstyledLink
        to={`/review/${review.id}`}
        className="flex flex-column items-center"
      >
        <h1 className="tc mb0 fw8">
          {review.title} ({review.releaseYear})
        </h1>
        <h2 className="fw4 mv2 pb1 f24 pre">
          <FontAwesomeIcon
            size="lg"
            icon={typeToIcon[review.type]}
            className=""
          />{" "}
          • {review.genre}
          {info && ` • ${info}`}
        </h2>
        <img src={review.poster} alt="" className="card-poster" />
        <div className="tc mv3 f24 pre" style={{ fontWeight: 600 }}>
          {formatDate(review.timestamp)} • {review.rating}% •{" "}
          <FontAwesomeIcon icon={faHeart} size="lg" className="heart mh1" />{" "}
          {review.likes.length} •{" "}
          <FontAwesomeIcon icon={faComment} className="comment mh1" size="lg" />{" "}
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

export const MiniCard = ({ review }: Props) => {
  const info = smallShowInfo(review);
  return (
    <UnstyledLink
      className="mini-review-container scale flex flex-column items-center"
      to={`/review/${review.id}`}
    >
      <h1 className="mini-title tc">{review.title + info}</h1>
      <img alt="" src={review.poster} className="mini-review-poster" />
      <h2 className="flex items-center pre mini-review-sub">
        <FontAwesomeIcon icon={typeToIcon[review.type]} size="lg" /> •{" "}
        {review.rating}%
      </h2>
    </UnstyledLink>
  );
};

export default Card;
