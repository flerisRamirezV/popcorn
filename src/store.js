import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './content/reducer/index';
import {save, load} from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const initialData= save(
    {
      states:[""
     ]
    }    
  );
  
  
  const createStoreWithMiddleware 
  = 
  composeWithDevTools(applyMiddleware(thunk,initialData),)
      
  (createStore)
  
  
    const store = createStoreWithMiddleware(
      rootReducer,    
       load({
            states:[""
           ]     
       }) 
   )  
  
  export default store;
