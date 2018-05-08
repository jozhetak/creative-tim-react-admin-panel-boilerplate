import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/css/material-dashboard-react.css';
import './styles/css/index.css';

import configureStore from './redux/store/configureStore';
import indexRoutes from './routes/index.jsx';

const hist = createBrowserHistory();
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
