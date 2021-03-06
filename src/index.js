import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { addRecipe } from './actions'
import store from './store/configStore'

// components
import App from './App';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';

store.subscribe(() => {
  console.log('new state', store.getState())
})

store.dispatch(addRecipe({title: 'title', body: 'stuff'}))
store.dispatch(addRecipe({title: 'OH MY GOD', body: 'IT\'S WORKING'}))
store.dispatch(addRecipe({title: 'Beef Stew', body: 'some carrots, some potatoes, some celery, some onions, some wine, some beef, some stock, and lots of rice to eat it with'}))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={App} />
        <Route path="/add" component={AddRecipe} />
        <Route path="/edit" component={EditRecipe} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
