import * as redux from 'redux';
import thunk from 'redux-thunk';

import {authReducer} from '../Reducers/authReducers';

export var configure = () => {
    var reducers = redux.combineReducers({
        auth: authReducer
    });

    var store = redux.createStore(reducers,redux.compose(
        redux.applyMiddleware(thunk)
        //window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};