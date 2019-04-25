import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  } //finish dispatch
};

export default handleVideoSearch;
  //TODO:  Write an asynchronous action to handle a video search!
/* this code works
  return (q) => {
    searchYouTube({q: q, key: YOUTUBE_API_KEY})
    //onchange -- have a function to handle onchange
    //pull something out of Store to handle video
  }
*/
/*
function incrementIfOdd(){
  return(dispatch, getState) => {
    const { counter } = getState();

    if(counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
*/

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
