import { connect } from 'react-redux';

import { compose } from 'redux';
import Layout from './Layout';
import { getMeTC } from '../../../../redux/thunk/auth-thunk';
import { withAuthRedirect } from '../../../../utils/hoc/redirect/RedirectComponents';
import { IState } from '../../models/state.interface';

const mapStateToProps = (state: IState) => ({
  initialized: (state.layout.initialized = true)
});

export default compose(
  connect(mapStateToProps, {
    getMeTC: getMeTC
  }),
  withAuthRedirect
)(Layout);
