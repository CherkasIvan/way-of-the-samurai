import React, { FC } from 'react'
import styles from './Pagination.module.scss'
import { IUser } from '../../main-content/models/user.interface'
import axios from 'axios'

interface IPaginationProps {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setUsers: (users: IUser[]) => void
  changePage: (pageNumber: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

const Pagination: FC<IPaginationProps> = ({
  pageSize,
  totalUsersCount,
  currentPage,
  setUsers,
  changePage,
  toggleIsFetching,
}) => {
  const onPageChanged = (pageNumber: number) => {
    changePage(pageNumber)
    toggleIsFetching(true)
    const users = '/users'
    const page = `?page=${pageNumber}`
    const pageSizeUsers = `&count=${pageSize}`
    axios
      .get('https://social-network.samuraijs.com/api/1.0' + users + page + pageSizeUsers, {
        withCredentials: true,
        headers: { 'API-KEY': '74eec926-80fb-473b-9e58-ad114bf47bb4' },
      })
      .then((response) => {
        setUsers(response.data.items)
        toggleIsFetching(false)
      })
  }

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages: number[] = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={styles.PaginationContainer}>
      {pages.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            onClick={(e) => onPageChanged(pageNumber)}
            className={currentPage === pageNumber ? styles.ActivePage : styles.Page}
          >
            {pageNumber}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
