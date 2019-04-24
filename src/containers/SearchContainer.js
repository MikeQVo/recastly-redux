import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import thunk from 'redux-thunk';

var SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    applyMiddleware(thunk)
 );

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

function mapStateToProps( ) {
    return {state: e.target.value}; //search
}

function mapDispatchToProps() {
  return {handleSearchChange:
}

export default SearchContainer;
/*
Test 1
      component.props().handleSearchInputChange('kitten mittens');
      expect(component.props().handleSearchInputChange).to.be.a('function');
      expect(store.dispatch.callCount).to.equal(1);
Test 2
      it('should be created using the React-Redux connect method', function() {
      expect(SearchContainer.name).to.equal('Connect');
*/

/*
import { addTodo, deleteTodo } from './actionCreators'

function mapStateToProps(state) {
  return { todos: state.todos }
}

const mapDispatchToProps = {
  addTodo,
  deleteTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
*/