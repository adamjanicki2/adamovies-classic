import { useParams } from "react-router-dom";
import { getUser } from "src/data/ops";
import NotFound from "src/pages/NotFound";
import { Id } from "src/types";

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
  return <div className="flex flex-column">{JSON.stringify(user)}</div>;
};

export default Profile;
