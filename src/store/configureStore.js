

//Redux Core
import {createStore, applyMiddleware} from 'redux';

//Redux Middleware

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//Reducer
import rootReducer from '../reducers/rootReducer';


//Redux Persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;


const persistConfig = {
    key: 'root',
    storage,
  }
   

export default function configureStore() {
    return createStore(
        persistReducer(persistConfig, rootReducer),
        composeWithDevTools(applyMiddleware(thunk), applyMiddleware(logger)))
}
