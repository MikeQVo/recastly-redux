import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import { applyMiddleware, bindActionCreators } from 'redux';
import currentVideo from '../actions/currentVideo.js';


const mapStateToProps = state => {return { video: state.currentVideo }};

// const mapDispatchToProps = dispatch => ({ currentVideo: dispatch.currentVideo})

const mapDispatchToProps = dispatch => {
  return {
    onClick: event => dispatch(currentVideo(event))
  }
}
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

//Gordon's psuedocode
//prop "video" connect to Store.currentVideo
var VideoPlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(VideoPlayer);

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