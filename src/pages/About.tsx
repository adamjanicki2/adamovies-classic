import { UnstyledLink } from "src/components/Link";
import PageWrapper from "src/components/PageWrapper";
import logo from "src/images/logo.png";
import "src/pages/about.css";

const About = () => (
  <PageWrapper title="About Adamovies" documentTitle="About | Adamovies">
    <div className="about-container flex flex-column items-center">
      <p className="about-text">
        Adamovies is an interactive site for movie and TV show geeks who like to
        read about what they watch. Reviews are published by admin users for
        everyone to see. An account is not necessary to use Adamovies, however,
        it is highly recommended because an account is required in order to like
        or comment on any reviews. Creating an account is easy, all you have to
        do is sign in with google: no additional registration is required!{" "}
        <br></br>
        <br></br>
        This site is meant to be simple to use. The home page contains the most
        recently published reviews, along with announcements from myself and
        other admins. Announcements will mostly be used to describe any updates
        on site functionality or new content. Then, there are separate pages for
        movies and shows, where you can browse any of the reviews published on
        the site. There is an option to sort reviews, and also search reviews by
        title, director, genre, year released, MPAA rating, or admin author.
        <br></br>
        <br></br>For users who choose to log in, there will be a profile page
        where you can make changes to your username and bio. The most fun part
        of the site is on an individual review page. On the review page for a
        movie or show, you'll find information on the title, such as director
        and year released, in addition to the admin's rating and review, and the
        like button. At the bottom of each review, There is a comment section
        where signed in users are able to leave their thoughts, and even
        interact with other users and admin, as the comments update in
        real-time. Users can use the @username function to get the attention of
        other users. When '@-ed', the '@-ed' user will receive a notification in
        their profile, as well as seeing their username in bold.
        <br></br>
        <br></br>
        From the comments section, users will also be able to view each other
        profile, as each comment contains a link to the commenter's profile
        page. You will be able to view other users' usernames and bios by
        visiting their profile page.
        <br></br>
        <br></br>
        As of the time I am writing this, I am the only admin user, so the
        amount of reviews I can write is very limited. I've seen a great deal of
        movies over the years, so it's going to take a while to write a review
        on the 100s of movies that I've seen. I'm going to prioritize writing
        reviews on content that I have just finished watching; that way I can
        write with the content fresh in my head. Also, I'll be writing writing
        weekly reviews of shows that are currently releasing (for example
        WandaVision). If you want to write reviews for the site, feel free to @
        me in the comments, or{" "}
        <UnstyledLink className="mail-link" to="mailto:adamoviessite@gmail.com">
          email me
        </UnstyledLink>{" "}
        and ask.
        <br></br>
        <br></br>
        That was a lot of text, and I'm sure you didn't read any of it, but in
        short, thanks for using Adamovies, and I hope you enjoy the site!
      </p>
      <img alt="" src={logo} className="mb3" />
    </div>
  </PageWrapper>
);

export default About;
