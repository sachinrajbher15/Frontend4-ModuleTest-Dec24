import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Use the correct import for v3.x
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));  // Apply thunk middleware directly

export default store;
