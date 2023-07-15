import React, {FC} from 'react';
import Posts from './Posts';
import { IPost } from '../../../../../../models/post.interface';

interface IPostContainerProps {
    postsData: IPost[],
  }

const PostsContainer: FC<IPostContainerProps> = ({postsData}) => {
    return (
        <div>
            <Posts postsData={postsData}/>
        </div>
    );
}

export default PostsContainer;