import {SET_CALLlOGS} from '../actions/callLogsActions';

const intialState = {
  callLogs: [],
};

export const callLogsReducer = (state = intialState, action) => {
    
  switch (action.type) {
    case SET_CALLlOGS:
      return {
        ...state,
        callLogs: action.callLogs,
      };
      break;
    default:
      return state;
      break;
  }
};
