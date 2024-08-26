import { UnstyledButton } from "@adamjanicki/ui";
import "src/components/input.css";

type SearchProps = {
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

export const Search = ({ onChange, onSubmit, onClear }: SearchProps) => {
  return (
    <div className="flex items-center w-50">
      <input
        type="search"
        className="NI-input"
        placeholder="Search by title, director, year, genre, MPAA rating, or admin"
        onChange={(e) => {
          onChange(e.target.value);
          if (!e.target.value) {
            onClear();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
      />
      <UnstyledButton
        onClick={() => {
          onSubmit();
        }}
        className="NI-button u-pointer"
      >
        Search
      </UnstyledButton>
    </div>
  );
};
