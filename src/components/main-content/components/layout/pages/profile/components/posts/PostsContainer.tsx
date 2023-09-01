import React, { FC } from 'react'
import Posts from './Posts'
import { IPost } from '../../../../../../models/post.interface'

interface IPostContainerProps {
  postsData: IPost[]
  addPostHandler: (text: string) => void
}

const PostsContainer: FC<IPostContainerProps> = ({ postsData, addPostHandler }) => {
  return (
    <div>
      <Posts postsData={postsData} addPost={addPostHandler} />
    </div>
  )
}

export default PostsContainer
