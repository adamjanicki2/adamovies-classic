import { useParams } from "react-router-dom";
import { getComments, getReview } from "src/data/ops";
import NotFound from "src/pages/NotFound";
import { Id } from "src/types";

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
  document.title = `${review.title} (${review.releaseYear}) | Adamovies`;
  return (
    <div className="flex flex-column">
      {JSON.stringify(review)}
      {JSON.stringify(comments)}
    </div>
  );
};

export default Review;
