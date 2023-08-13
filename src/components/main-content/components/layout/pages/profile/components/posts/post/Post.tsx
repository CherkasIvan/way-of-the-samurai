import React, { useState, FC } from 'react'
import classes from './Post.module.scss'
import ProfileInfo from '../../profileInfo/ProfileInfo'
import LikeImg from '../../../../../../../../../assets/img/like.svg'

interface IPostProps {
  message: string
  name: string
  id: number
  counter: number
}

const Post: FC<IPostProps> = ({ message, name, counter }) => {
  const [conter, setCount] = useState(counter)

  return (
    <div className={classes.PostContainer}>
      <ProfileInfo message={message} name={name}></ProfileInfo>

      <div className={classes.ButtonContainer}>
        <button className={classes.PostUserLike} onClick={() => setCount(Number(conter + 1))}>
          <img src={LikeImg} alt='like-logo.jpg' className={classes.PostUserLikeLogo}></img>
        </button>
        <span className={classes.PostUserLikeCounter}>{conter}</span>
      </div>
    </div>
  )
}

export default Post
