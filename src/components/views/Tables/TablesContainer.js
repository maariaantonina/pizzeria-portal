import { connect } from 'react-redux';
import Tables from './Tables';
import { getAll, fetchFromAPI, getLoadingState, setNewStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (id, newStatus) => dispatch(setNewStatus(id, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
