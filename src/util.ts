import type { HydratedReview, Review } from "src/types";

export function showInfo(review: Review | HydratedReview): string | null {
  if (!review.season && !review.episode) {
    return null;
  }
  let info = [];
  if (review.season) {
    info.push(`Season ${review.season}`);
  }
  if (review.episode) {
    info.push(`Episode ${review.episode}`);
  }
  return info.join(" ");
}

export function formatDate(timestamp: number): string {
  // format date as mm/dd/yyyy:
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}
