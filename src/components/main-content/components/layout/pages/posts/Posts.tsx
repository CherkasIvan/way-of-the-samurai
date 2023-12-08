import Post from './post/Post';
import classes from './Posts.module.scss';
import { IPost } from '../../../../models/post.interface';
import AddTextAreaPostReduxForm from '../../../../../shared/add-post/AddTextAreaPost';
import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface IPostProps {
  postsData: IPost[];
  addPostAC: (message: string) => void;
}

const Posts: FC<IPostProps> = React.memo(({ postsData, addPostAC }) => {
  const posts = postsData.map(
    (el: IPost) => (
      <Post
        message={el.message}
        name={el.name}
        id={el.id}
        counter={el.counter}
        key={el.id}></Post>
    ),
    [postsData, addPostAC]
  );

  const handleSubmit = (formData: { newPostBody: string }) => {
    addPostAC(formData.newPostBody);
  };

  return (
    <div className={classes.postsContainer}>
      <p className={classes.postsTitle}>Here is my posts</p>
      {posts}
      <AddTextAreaPostReduxForm onSubmit={handleSubmit} />
    </div>
  );
});

Posts.propTypes = {
  postsData: PropTypes.any,
  addPostAC: PropTypes.any
};

Posts.displayName = 'Posts';

export default Posts;
