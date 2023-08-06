import React, {FC} from 'react';
import Posts from './Posts';
import { IPost } from '../../../../../../models/post.interface';

interface IPostContainerProps {
    postsData: IPost[],
    updatePostHandler: (text:string) => void
    addPostHandler: () => void
  }

const PostsContainer: FC<IPostContainerProps> = ({postsData, addPostHandler, updatePostHandler: updatePostHandler}) => {
    return (
        <div>
            <Posts postsData={postsData} updatePostHandler={updatePostHandler} addPostHandler={addPostHandler} />
        </div>
    );
}

export default PostsContainer;