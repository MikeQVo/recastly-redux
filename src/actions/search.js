import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!

  return () => {

    //onchange -- have a function to handle onchange
    //pull something out of Store to handle video
  }
};
export default handleVideoSearch;
/*
var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};
*/
/*
const mapDispatchToProps = dispatch => {
  return {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };



    onAddTodo: todo => {
      dispatch(addTodo(toto));
    }
  };
};
*/
/*
searchYouTube(options,(data)=>{
      console.log(data);
      this.setState({
        currentVideo: data.items[0],
        videoList: data.items
      });
    });
*/

/*     return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
*/
/*
var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: "CHANGE_VIDEO_LIST",
  videos: videos
});
*/
    //some logic here
    //  dispatch(changeVideo(videos[0]));