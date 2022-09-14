const initialState = {
  data: [],
  isLoading: false,
  errors: [],
};

interface Action {
  payload?:any;
  type:string;
}

export const dataReducer = (state = initialState, action:Action) => {
  const {payload} = action;
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_DATA_SUCCESS': {
        return {
          ...state,
          data:payload,
          isLoading: false,
        };
    }
    case 'FETCH_DATA_FAILED':
      return {
        ...state,
        isLoading: false,
        errors:payload,
      };
    case 'SAVE_DATA':
      return {
        ...state,
        data: [payload, ...state.data],
        isLoading: false,
      };

    default:
      return state;
  }
};

export default dataReducer;
