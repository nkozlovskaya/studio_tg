import { FC } from "react";
import "./Pagination.sass";

interface PaginationProps {
  nextPage: () => void;
}

export const PaginationNextPage: FC<PaginationProps> = ({ nextPage }) => {
  return (
    <div className="paginate">
      <button className="paginate-btn" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};
