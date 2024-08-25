export type Children = React.ReactNode | React.ReactNode[];

export type Id = number;

export type Review = {
  type: "movie" | "show";
  title: string;
  rating: number;
  content: string;
  timestamp: number;
  director: string;
  runtime?: number;
  season?: number;
  episode?: number;
  genre: string;
  mpaa: string;
  trailer: string;
  releaseYear: number;
  admin: Id;
  poster: string;
  likes: Id[];
  id: Id;
};

export type HydratedReview = Omit<Review, "admin" | "likes"> & {
  admin: HydratedUser;
  likes: HydratedUser[];
  comments: number;
};

export type Draft = Partial<Review>;

export type User = {
  picture: string;
  admin: boolean;
  username: string;
  bio: string;
  favoriteShow: string;
  favoriteMovie: string;
  currentlyWatching: string;
};

export type HydratedUser = User & {
  id: Id;
};

export type Comment = {
  content: string;
  timestamp: number;
  review: Id;
  user: Id;
};

export type HydratedComment = Omit<Comment, "user"> & {
  user: HydratedUser;
};

export type Announcement = {
  title: string;
  content: string;
  timestamp: number;
  admin: Id;
};

export type HydratedAnnouncement = Omit<Announcement, "admin"> & {
  admin: HydratedUser;
};
