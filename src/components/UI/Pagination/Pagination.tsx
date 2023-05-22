import { FC } from "react";
import "./Pagination.sass";

interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  firstPage: () => void;
  currentPage: number;
}

export const Pagination: FC<PaginationProps> = ({
  nextPage,
  prevPage,
  firstPage,
  currentPage,
}) => {
  return (
    <div className="paginate">
      <button className="paginate-btn" onClick={firstPage}>
        Start
      </button>
      <button className="paginate-btn prev" onClick={prevPage}></button>
      <button className="paginate-btn">{currentPage}</button>
      <button className="paginate-btn next" onClick={nextPage}></button>
    </div>
  );
};
