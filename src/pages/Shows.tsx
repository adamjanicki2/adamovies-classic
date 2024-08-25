import Listing from "src/components/Listing";
import PageWrapper from "src/components/PageWrapper";

const Shows = () => (
  <PageWrapper documentTitle="TV Shows | Adamovies" title="TV Shows">
    <Listing filter={{ type: "show" }} />
  </PageWrapper>
);

export default Shows;
