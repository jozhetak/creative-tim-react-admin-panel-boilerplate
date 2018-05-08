import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers List
import adminProductCategoryReducer from '../reducers/adminProductCategoryReducer/adminProductCategoryReducer';

// REDUX Devtools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      // Key value pair of reducers
      adminProductCategory: adminProductCategoryReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
