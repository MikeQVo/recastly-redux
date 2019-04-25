import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';

var handleVideoSearch = (q) => {

  return _.debounce((dispatch) => {

    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  }, 1000);
};


export default handleVideoSearch;



// return (dispatch) => {
//     searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (videos) => {
//       dispatch(changeVideoList(videos));
//       dispatch(changeVideo(videos[0]));
//     });
//   } //finish dispatch