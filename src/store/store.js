import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// root-reducer
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('Type: ', action.type);
  console.log('Payload: ', action.payload);
  console.log('Current State: ', store.getState());

  next(action);
  console.log('Next State: ', store.getState());
};

const middleWares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
