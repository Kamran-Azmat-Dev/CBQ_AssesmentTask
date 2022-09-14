import {fetchDatafromApi} from '../../Apis'

interface Object {
  title: string;
  id: number;
}

export const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST',
  };
};
export const fetchDataSuccess = (data: Object) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  };
};
export const fetchDataFail = (error: unknown) => {
  return {
    type: 'FETCH_DATA_FAILED',
    payload: error,
  };
};
export const fetchData = () => async (dispatch:any) => {
  try {
    dispatch(fetchDataRequest());
    const data = await fetchDatafromApi();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFail(error));
  }
};
export const saveData = (data: Object) => {
  return {
    type: 'SAVE_DATA',
    payload: data,
  };
};
