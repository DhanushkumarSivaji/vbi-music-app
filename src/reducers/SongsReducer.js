import { GET_SONGS,FILTER_SONGS } from "../actions/Types";

const initialState = {
  songs: null,
  albums: null,
  filtered: null
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    case FILTER_SONGS:
      return {
        ...state,
        filtered: state.songs.filter(song => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return song.title.match(regex);
          })
        };
    default:
      return state;
  }
}
