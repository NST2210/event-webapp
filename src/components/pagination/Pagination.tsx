import React from 'react';

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, pageSize, currentPage, onPageChange }) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize)); // luôn có ít nhất 1 page
  const maxVisiblePages = 3;

  const getPages = (): number[] => {
    let start = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let end = start + maxVisiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <button className="arrow" disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        «
      </button>

      <button className="arrow" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        ‹
      </button>

      {getPages().map((page) => (
        <button
          key={page}
          className={`page ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button className="arrow" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        ›
      </button>

      <button className="arrow" disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>
        »
      </button>
    </div>
  );
};

export default Pagination;
