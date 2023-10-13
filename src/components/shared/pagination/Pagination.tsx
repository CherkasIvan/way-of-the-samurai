import React, { FC, useState } from 'react';
import styles from './Pagination.module.scss';
import cn from 'classnames';

interface IPaginationProps {
  pageSize: number;
  totalItemsCount: number;
  currentPage: number;
  changePage: (pageNumber: number) => void;
  getUsersTC: (users: string, page: string, pageSize: string) => any;
  portionSize: number;
}

const Pagination: FC<IPaginationProps> = ({
  pageSize,
  totalItemsCount,
  currentPage,
  changePage,
  getUsersTC,
  portionSize
}) => {
  const onPageChanged = (pageNumber: number) => {
    changePage(pageNumber);
    const users = '/users';
    const page = `?page=${pageNumber}`;
    const pageSizeUsers = `&count=${pageSize}`;
    getUsersTC(users, page, pageSizeUsers);
  };

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.Paginator}>
      {portionNumber > 1 && (
        <button
          className={styles.ChangeSetButton}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}>
          PREV
        </button>
      )}
      <div className={styles.PaginationContainer}>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                className={cn(
                  {
                    [styles.selectedPage]: currentPage === p
                  },
                  styles.pageNumber
                )}
                key={p}
                onClick={(e) => {
                  onPageChanged(p);
                }}>
                {p}
              </span>
            );
          })}
      </div>

      {portionCount > portionNumber && (
        <button
          className={styles.ChangeSetButton}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}>
          NEXT
        </button>
      )}
    </div>
  );
};

export default Pagination;
