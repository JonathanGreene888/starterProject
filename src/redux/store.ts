import { createStore, applyMiddleware } from 'redux';
import 'regenerator-runtime/runtime';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import createRootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

// This works around an issue when testing sagas that causes an import to occur before it's exported
if (process.env.NODE_ENV !== 'test') {
    sagaMiddleware.run(rootSaga);
}

export default store;
