import Posts from './Posts';
import { IPost } from '../../../../models/post.interface';
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../../../utils/hoc/redirect/RedirectComponents';
import { IState } from '../../../../models/state.interface';
import React from 'react';

interface IPostContainerProps {
  postsData: IPost[];
  addPostHandler: (text: string) => void;
}

class PostsContainer extends React.Component<IPostContainerProps> {
  render(): React.ReactNode {
    return (
      <div>
        <Posts
          postsData={this.props.postsData}
          addPost={this.props.addPostHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    postsData: state.profilePage.posts
  };
};

export default compose(
  connect(mapStateToProps, {
    // addPostHandler
  }),
  withAuthRedirect
)(Posts);
