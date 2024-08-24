import reviews from "src/data/reviews";
import users from "src/data/users";
import comments from "src/data/comments";
import type {
  Review,
  Comment,
  Announcement,
  HydratedReview,
  HydratedComment,
  HydratedAnnouncement,
  HydratedUser,
  Id,
} from "src/types";

function countComments(reviewId: Id): number {
  return comments.reduce(
    (total, comment) => (comment.review === reviewId ? total + 1 : total),
    0
  );
}

export function recentReviews(amount: number = 18): HydratedReview[] {
  const recents: HydratedReview[] = [];
  let index = reviews.length - 1;
  while (recents.length < amount) {
    recents.push(populateReview(reviews[index], index));
    index--;
  }
  return recents;
}

export function getReview(id: Id): HydratedReview | null {
  const review = reviews[id];
  return review ? populateReview(review, id) : null;
}

export function populateReview(review: Review, id: Id): HydratedReview {
  const userIndex = review.admin;
  const user = users[userIndex];
  const likes: HydratedUser[] = review.likes.map((like) => ({
    ...users[like],
    id: like,
  }));
  const comments = countComments(id);
  return { ...review, comments, id, admin: { ...user, id: userIndex }, likes };
}

export function populateComment(comment: Comment): HydratedComment {
  const userIndex = comment.user;
  const user = users[userIndex];
  return { ...comment, user: { ...user, id: userIndex } };
}

export function populateAnnouncement(
  announcement: Announcement
): HydratedAnnouncement {
  const userIndex = announcement.admin;
  const user = users[userIndex];
  return { ...announcement, admin: { ...user, id: userIndex } };
}

export function findReviews(
  filter: Record<string, any>,
  options: { limit?: number; query?: string } = {}
): HydratedReview[] {
  let filteredReviews = reviews.filter((review: Review) => {
    for (const key in filter) {
      if (filter[key] !== review[key as keyof Review]) {
        return false;
      }
    }
    return true;
  });

  if (options.query) {
    const query = options.query.toLowerCase();
    filteredReviews = filteredReviews.filter(
      (review) =>
        review.title.toLowerCase().includes(query) ||
        review.content.toLowerCase().includes(query)
    );
  }

  filteredReviews = options.limit
    ? filteredReviews.slice(0, options.limit)
    : filteredReviews;

  // The map using an index and the populate taking it is awesome
  return filteredReviews.map(populateReview);
}

export function getComments(reviewId: Id): HydratedComment[] {
  return comments
    .filter((comment) => comment.review === reviewId)
    .map(populateComment);
}

export function getUser(id: Id): HydratedUser | null {
  const user = users[id];
  return user ? { ...user, id } : null;
}
