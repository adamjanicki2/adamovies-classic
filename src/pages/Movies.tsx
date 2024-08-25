import Listing from "src/components/Listing";
import PageWrapper from "src/components/PageWrapper";

const Movies = () => {
  return (
    <PageWrapper documentTitle="Movies | Adamovies" title="Movies">
      <Listing filter={{ type: "movie" }} />
    </PageWrapper>
  );
};

export default Movies;
