//fetching data from the api with redux
import{Platform} from 'react-native'; //detects the platform in which the app is running ; for remote deve tools
import{ 
    createStore, 
    applyMiddleware, 
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk,promise, logger);

const Store = createStore( //createStore() to create initial store. pass this store to the <Provider> 
    RootReducer,        // createStore(reducer, preloaded state,enhancer)
    compose( //compose() composes functions from right to left
            middleware,
            devTools({
                name: Platform.OS,
                hostname: 'localhost',
                port: 5678
            }),
    )
);

export default Store; 