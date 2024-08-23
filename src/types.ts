export type Children = React.ReactNode | React.ReactNode[];

type Id = number;

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

export type Comment = {
  content: string;
  timestamp: number;
  review: Id;
  user: Id;
};

export type Announcement = {
  title: string;
  content: string;
  timestamp: number;
  admin: Id;
};
