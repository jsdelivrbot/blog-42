import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import PostList from './components/post-list';
import PostCreate from './components/post-create';
import PostDetail from './components/post-detail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostCreate} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/" component={PostList} />
        </Switch>
      </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
