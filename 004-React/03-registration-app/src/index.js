import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducers} from "./Components/redux/reducers/rootReducers";
import {render} from "react-dom";

const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ReactDOM.render(
//     <Provider store={store}>
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>
//     </Provider>,
//     document.getElementById('root'),
// );

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
)
render(
    app,
    document.getElementById('root'),
);

serviceWorker.unregister();
