import { faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
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

export function smallShowInfo(review: Review | HydratedReview): string | null {
  if (!review.season && !review.episode) {
    return null;
  }
  let info = " ";
  if (review.season) {
    info += `S${review.season}`;
  }
  if (review.episode) {
    info += `E${review.episode}`;
  }
  return info;
}

export function formatDate(timestamp: number, includeTime = false): string {
  // format date as mm/dd/yyyy:
  const date = new Date(timestamp);
  const str = date
    .toLocaleDateString(
      "en-US",
      includeTime ? { hour: "numeric", minute: "numeric" } : undefined
    )
    .replace(",", "")
    .replace(" at", "");
  if (!includeTime) {
    return str;
  }
  const [d, t, p] = str.split(" ");
  return `${d} ${t}${p}`;
}

export function convertRuntime(runtime: number): string {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h${minutes}m`;
}

export function resizePFP(pfp: string, size: number) {
  return pfp.replace("/s96-c/", `/s${size}-c/`);
}

export const typeToIcon = {
  show: faTv,
  movie: faFilm,
} as const;
