import { useState } from "react";
import Card from "src/components/Card";
import { Search } from "src/components/Input";
import { findReviews } from "src/data/ops";
import { HydratedReview, Review } from "src/types";

type SortFunction = (a: HydratedReview, b: HydratedReview) => number;
const sortOptions: Record<string, SortFunction> = {
  "Title: (Alphabetically)": (a, b) => a.title.localeCompare(b.title),
  "Title: (Reverse Alphabetically)": (a, b) => b.title.localeCompare(a.title),
  "Rating: (Low to High)": (a, b) => a.rating - b.rating,
  "Rating: (High to Low)": (a, b) => b.rating - a.rating,
  "Likes: (Low to High)": (a, b) => a.likes.length - b.likes.length,
  "Likes: (High to Low)": (a, b) => b.likes.length - a.likes.length,
  "Published: (Old to New)": (a, b) => a.timestamp - b.timestamp,
  "Published: (New to Old)": (a, b) => b.timestamp - a.timestamp,
  "Release: (Old to New)": (a, b) => a.releaseYear - b.releaseYear,
  "Release: (New to Old)": (a, b) => b.releaseYear - a.releaseYear,
};

type Props = {
  filter?: Partial<Review>;
};

const Listing = ({ filter = {} }: Props) => {
  const [sortKey, setSortKey] = useState<keyof typeof sortOptions>(
    "Title: (Alphabetically)"
  );
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  const sortFunction = sortOptions[sortKey];

  let filteredReviews = findReviews(filter, { query }).sort(sortFunction);

  return (
    <>
      <Search
        onChange={setValue}
        onSubmit={() => setQuery(value)}
        onClear={() => setQuery("")}
      />
      <select
        onChange={(e) => {
          setSortKey(e.target.value as keyof typeof sortOptions);
        }}
        className="mt3 mb4"
        style={{ fontSize: "15px", borderRadius: 4 }}
      >
        {Object.keys(sortOptions).map((key) => (
          <option key={key} value={key}>
            Sort By: {key}
          </option>
        ))}
      </select>
      <div className="w-100 ph1 flex flex-wrap justify-center">
        {filteredReviews.map((review) => (
          <Card key={review.id} review={review} />
        ))}
      </div>
    </>
  );
};

export default Listing;
