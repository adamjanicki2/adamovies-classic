import Announcements from "src/components/Announcements";
import Card from "src/components/Card";
import PageWrapper from "src/components/PageWrapper";
import { recentReviews as getRecentReviews } from "src/data/ops";

const recentReviews = getRecentReviews();

const Home = () => (
  <PageWrapper documentTitle="Adamovies" title="Announcements">
    <Announcements />
    <h1 className="page-title-text">Recent Reviews</h1>
    <div className="w-100 ph1 flex flex-wrap justify-center">
      {recentReviews.map((review) => (
        <Card key={review.id} review={review} />
      ))}
    </div>
  </PageWrapper>
);

export default Home;
