import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';


function mapStateToProps(state) {
  return {search: state.Search}; //return created object
}

const mapDispatchToProps = dispatch => ({ handleSearchInputChange: (q) => {dispatch(handleVideoSearch(q))}})


var SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search);

export default SearchContainer;
