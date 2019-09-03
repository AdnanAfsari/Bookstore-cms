import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { generateID } from './utils';

import App from './components/App';


const INITIAL_STATE = {
  books: [
    { id: generateID(), title: 'Laws of Power', category: 'Learning' },
    { id: generateID(), title: 'Why Men want Sex and Women want Love', category: 'Learning' },
    { id: generateID(), title: 'Life 3.0', category: 'Sci-Fi' },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
