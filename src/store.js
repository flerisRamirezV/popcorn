import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './content/reducer/index';
import {save, load} from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './content/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const initialData= save(
    {
      states:["movieFavorites"
     ]
    }    
  );
  
  
  const createStoreWithMiddleware 
  = 
  composeWithDevTools(applyMiddleware(thunk,sagaMiddleware,initialData),)
      
  (createStore)
  
  
    const store = createStoreWithMiddleware(
      rootReducer,    
       load({
            states:["movieFavorites"
           ]     
       }) 
   )  
   sagaMiddleware.run(rootSaga)
  export default store;
