import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import SelectRestaurantPage from './containers/SelectRestaurantPage/SelectRestaurantPage';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/room/:id/select-restaurant" component={SelectRestaurantPage}/>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
