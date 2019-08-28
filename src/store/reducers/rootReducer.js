import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import projectReducer from './projectReducer';
import cardReducer from './cardReducer';

export default combineReducers({
  board: boardReducer,
  projects: projectReducer,
  cards: cardReducer,
});
