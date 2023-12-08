import Posts from './Posts';
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../../../utils/hoc/redirect/RedirectComponents';
import { IState } from '../../../../models/state.interface';
import { AddPostAC } from '../../../../../../redux/actions/actions';

const mapStateToProps = (state: IState) => {
  return {
    postsData: state.profilePage.posts
  };
};

export default compose(
  connect(mapStateToProps, {
    addPostAC: AddPostAC
  }),
  withAuthRedirect
)(Posts);
