import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import PostListReducer from './postlist-reducer';

const rootReducer = combineReducers({
  postList: PostListReducer,
  form: FormReducer
});

export default rootReducer;
