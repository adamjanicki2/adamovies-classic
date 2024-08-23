import reviews from "src/data/reviews";
import users from "src/data/users";
import type { Review, Comment, Announcement } from "src/types";

export function recentReviews(amount: number = 18) {
  const numberOfReviews = reviews.length;
  const startIndex = numberOfReviews - amount;
  return reviews.slice(startIndex, numberOfReviews);
}

export function populateReview(review: Review) {
  const userIndex = review.admin;
  const user = users[userIndex];
  const likes = review.likes.map((like) => users[like]);
  return { ...review, user, likes };
}

export function populateComment(comment: Comment) {
  const userIndex = comment.user;
  const user = users[userIndex];
  return { ...comment, user };
}

export function populateAnnouncement(announcement: Announcement) {
  const userIndex = announcement.admin;
  const user = users[userIndex];
  return { ...announcement, user };
}
