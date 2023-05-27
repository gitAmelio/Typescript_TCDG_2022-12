import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { App  } from './components/App';
import { reducers } from './reducures';

const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root")!);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// import { AppClass } from './touchedOnClassAndFunctionalComponent';
// import { AppFunctional } from './touchedOnClassAndFunctionalComponent';

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     ,
//     document.querySelector('#root')
// )