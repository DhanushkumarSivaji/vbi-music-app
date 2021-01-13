import { GET_SONGS,FILTER_SONGS } from './Types';
import {baseURL} from '../utils/AxiosConfiguration'

export const getSongs = () => async (dispatch) => {

  try {
    const res = await baseURL.get('/albums');
    dispatch({
      type: GET_SONGS,
      payload: res.data
    });

  } catch (error) {
    console.log(`GET SONGS ERROR${error}`);
  }

};

export const filterSongs = (data) => async (dispatch) => {

  try {
    dispatch({
      type: FILTER_SONGS,
      payload: data
    });

  } catch (error) {
    console.log(`FILTER SONGS ERROR${error}`);
  }

};
