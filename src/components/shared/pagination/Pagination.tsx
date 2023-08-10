import React, { FC } from 'react'
import styles from './Pagination.module.scss'
import { IUser } from '../../main-content/models/user.interface'
import axios from 'axios'


interface IPaginationProps {
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setUsers: (users: IUser[]) => void,
    changePage: (pageNumber: number) => void
  }

const Pagination: FC<IPaginationProps> = ({pageSize, totalUsersCount, currentPage, setUsers, changePage}) => {
    const onPageChanged = (pageNumber: number) => {
        changePage(pageNumber)
        const users = '/users'
        const page = `?page=${pageNumber}`
        const pageSizeUsers = `&count=${pageSize}`
        axios.get('https://social-network.samuraijs.com/api/1.0' + users + page + pageSizeUsers).then(response => {
          setUsers(response.data.items)
        })
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: number[] = []
  
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

  return (
        <div className={styles.PaginationContainer}>
            {pages.map(pageNumber => {
                return <button onClick={(e) => onPageChanged(pageNumber) } className={currentPage === pageNumber ? styles.ActivePage : styles.Page}>{pageNumber}</button>
            })}
        </div>        
  )
}

export default Pagination