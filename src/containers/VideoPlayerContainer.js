import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import { applyMiddleware } from 'redux';

var VideoPlayerContainer = () => {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
    applyMiddleware(thunk)
  )(VideoPlayer)
};

const mapStateToProps = state => ({ : state.todos })

const mapDispatchToProps = dispatch => {
  return {

  }
}

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

//Gordon's psuedocode
//prop "video" connect to Store.currentVideo

export default VideoPlayerContainer;

/*
  it('should have a prop called video connected to the currentVideo in the store', function() {
      expect(component.prop('video')).to.be.an('object');
      expect(component.prop('video')).to.deep.equal({ script: 'I like traffic lights.'});

  it('should be created using the React-Redux connect method', function() {
      expect(VideoPlayerContainer.name).to.equal('Connect');
*/

/*
const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.id]
})
*/