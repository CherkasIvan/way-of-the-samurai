import React, { FC } from 'react';
import styles from './Pagination.module.scss';

interface IPaginationProps {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  changePage: (pageNumber: number) => void;
  getUsersTC: (users: string, page: string, pageSize: string) => any;
}

const Pagination: FC<IPaginationProps> = ({
  pageSize,
  totalUsersCount,
  currentPage,
  changePage,
  getUsersTC
}) => {
  const onPageChanged = (pageNumber: number) => {
    changePage(pageNumber);
    const users = '/users';
    const page = `?page=${pageNumber}`;
    const pageSizeUsers = `&count=${pageSize}`;
    getUsersTC(users, page, pageSizeUsers);
  };

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages: number[] = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.PaginationContainer}>
      {pages.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            onClick={(e) => onPageChanged(pageNumber)}
            className={
              currentPage === pageNumber ? styles.ActivePage : styles.Page
            }>
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
