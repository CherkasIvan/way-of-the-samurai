import { FC } from 'react'
import Post from '../../components/posts/post/Post'
import classes from './Posts.module.scss'
import { IPost } from '../../../../../../models/post.interface'
import AddTextAreaMessage from '../../../../../../../shared/add-post/AddTextAreaMessage'
import {
  AddPostActionCreator,
  UpdatePostActionCreator,
} from '../../../../../../../../redux/actions'
import { connect } from 'react-redux'
import { IState } from '../../../../../../models/state.interface'
import { IAction } from '../../../../../../../../utils/models/action.interface'

interface IPostProps {
  postsData: IPost[]
  updatePostHandler: (text: string) => void
  addPostHandler: (text: string) => void
}

const Posts: FC<IPostProps> = ({ postsData, updatePostHandler, addPostHandler }) => {
  const posts = postsData.map((el: IPost) => (
    <Post message={el.message} name={el.name} id={el.id} counter={el.counter} key={el.id}></Post>
  ))

  return (
    <div className={classes.postsContainer}>
      <p className={classes.postsTitle}>Here is my posts</p>
      {posts}
      <AddTextAreaMessage
        textAreaLabel='post'
        addPostText={addPostHandler}
        updateNewPostText={updatePostHandler}
      />
    </div>
  )
}

export default Posts
