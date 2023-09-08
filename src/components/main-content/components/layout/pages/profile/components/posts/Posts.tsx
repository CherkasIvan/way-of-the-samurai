import { FC } from 'react';
import Post from '../../components/posts/post/Post';
import classes from './Posts.module.scss';
import { IPost } from '../../../../../../models/post.interface';
import AddTextAreaPostReduxForm from '../../../../../../../shared/add-post/AddTextAreaPost';

interface IPostProps {
  postsData: IPost[];
  addPost: (text: string) => void;
}

const Posts: FC<IPostProps> = ({ postsData, addPost }) => {
  const posts = postsData.map((el: IPost) => (
    <Post
      message={el.message}
      name={el.name}
      id={el.id}
      counter={el.counter}
      key={el.id}></Post>
  ));

  const handleSubmit = (formData: any) => {
    addPost(formData.newPostBody);
  };

  return (
    <div className={classes.postsContainer}>
      <p className={classes.postsTitle}>Here is my posts</p>
      {posts}
      <AddTextAreaPostReduxForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Posts;
