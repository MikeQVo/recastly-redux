import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//var VideoListContainer = () => {}; refacted at bottom

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = state => {return { videos: state.videoList }};

const mapDispatchToProps = dispatch => {
  return {handleVideoListEntryTitleClick: event => dispatch(changeVideo(event))};
};

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer;

/*
    it('should have a prop called handleVideoListEntryTitleClick which dispatches changeVideo', function() {
      component.props().handleVideoListEntryTitleClick({ script: 'I like traffic lights.'});
    it('should have a prop called videos connected to the videoList in the store', function() {
      expect(component.prop('videos')).to.be.an('array');
      expect(component.prop('videos')).to.deep.equal([{script: 'but only when they\'re green.'}]);
    it('should be created using the React-Redux connect method', function() {
      expect(VideoListContainer.name).to.equal('Connect');
    });
*/