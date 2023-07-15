import React, {FC} from 'react';
import Posts from './Posts';
import { IPost } from '../../../../../../models/post.interface';

interface IPostContainerProps {
    postsData: IPost[],
    updatePostHeandler: (text:string) => void
    addPostHeandler: () => void
  }

const PostsContainer: FC<IPostContainerProps> = ({postsData, addPostHeandler, updatePostHeandler}) => {
    return (
        <div>
            <Posts postsData={postsData} updatePostHeandler={updatePostHeandler} addPostHeandler={addPostHeandler} />
        </div>
    );
}

export default PostsContainer;