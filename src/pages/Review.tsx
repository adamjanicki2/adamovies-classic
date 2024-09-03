import { useParams } from "react-router-dom";
import Back from "src/components/Back";
import { getComments, getReview } from "src/data/ops";
import NotFound from "src/pages/NotFound";
import { Id } from "src/types";
import "src/pages/review.css";
import {
  convertRuntime,
  formatDate,
  showInfo,
  smallShowInfo,
  typeToIcon,
} from "src/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnstyledLink } from "src/components/Link";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import Comment from "src/components/Comment";

const Review = () => {
  const params = useParams();
  let id: Id = 0;
  try {
    id = parseInt(params.id || "");
  } catch {
    return <NotFound />;
  }
  const review = getReview(id);
  if (!review) {
    return <NotFound />;
  }
  const comments = getComments(id);
  document.title = `${review.title}${smallShowInfo(review)} (${
    review.releaseYear
  }) | Adamovies`;
  const tvInfo = showInfo(review);
  return (
    <>
      <Back />
      <div className="review-containercontainer flex justify-center w-100">
        <div className="review-container flex flex-column items-center">
          <h1 className="review-title mv3">
            {review.title} ({review.releaseYear})
          </h1>
          {tvInfo && <h1 className="tc">{tvInfo}</h1>}
          <h1 className="tc">{review.rating}%</h1>
          <img src={review.poster} alt="" className="poster-img" />
          <h2 className="pre tc">
            <FontAwesomeIcon size="lg" icon={typeToIcon[review.type]} /> •{" "}
            {review.genre} • {review.director} • {review.mpaa}
            {review.runtime && <> • {convertRuntime(review.runtime)}</>}
          </h2>
          <UnstyledLink
            className="fw3 link underline-hover"
            to={review.trailer}
            target="_blank"
            rel="noreferrer"
          >
            View Trailer
          </UnstyledLink>
          <hr className="review-line" />
          <div className="flex flex-wrap justify-center w-100">
            <h1 className="review-titleentry">
              {formatDate(review.timestamp, true)}
            </h1>
            <h1 className="review-titleentry flex items-center">
              <img
                src={review.admin.picture}
                height={28}
                width={28}
                className="br-25 bw1 b--black ba mr1"
                alt=""
              />
              <UnstyledLink
                to={`/user/${review.admin.id}`}
                className="underline-hover"
              >
                {review.admin.username}
              </UnstyledLink>
            </h1>
            <h1 className="review-titleentry">Adameter: {review.rating}%</h1>
          </div>
          <div className="like-container" style={{ marginRight: "auto" }}>
            <FontAwesomeIcon icon={faHeart} size="2x" className="heart" />
            <h2 className="ma0 pa0 ml2">{review.likes.length}</h2>
          </div>
          <h2 className="mt2 mb0" style={{ marginRight: "auto" }}>
            Review:
          </h2>
          <p className="review-content pre mb0">{review.content}</p>
          <hr className="review-line mb2" />
          <div className="like-container mt2" style={{ marginRight: "auto" }}>
            <FontAwesomeIcon icon={faComment} size="2x" className="comment" />
            <h2 className="ma0 pa0 ml2">{comments.length}</h2>
          </div>
          <div className="flex flex-column w-100 mt3 ph3">
            {comments.map((comment, i) => (
              <Comment key={i} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
