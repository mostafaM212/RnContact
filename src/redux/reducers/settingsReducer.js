import colors from '../../assets/theme/colors';
import {SET_COLOR} from '../actions/settingsActions';

const initialState = {
  backgroundColor: '',
  mainColor: colors.MAROON,
  fontSize: '',
};

const settingsReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        mainColor: action.color,
      };
      break;

    default:
      return state;

      break;
  }
};

export default settingsReducer;
