import { HydratedComment } from "src/types";
import "src/components/comment.css";
import { formatDate } from "src/util";
import { UnstyledLink } from "src/components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
type Props = {
  comment: HydratedComment;
};

const Comment = ({ comment }: Props) => {
  return (
    <div className="comment-body pre">
      {formatDate(comment.timestamp, true)} |{" "}
      <div
        className="mh1 ba bw1 b--black br-25 fw6 flex items-center justify-center"
        style={{ width: 18, height: 18 }}
      >
        {comment.user.username[0]}
      </div>
      <UnstyledLink
        className="comment-username mh1"
        to={`/user/${comment.user.id}`}
      >
        {comment.user.username}
      </UnstyledLink>
      <FontAwesomeIcon size="1x" className="check-icon" icon={faCheckCircle} />:{" "}
      <span>{comment.content}</span>
    </div>
  );
};

export default Comment;
