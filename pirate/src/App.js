import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import HomePage from './components/common/HomePage.jsx';
import AboutPage from './components/common/AboutPage.jsx';
import UsersPage from './components/users/UsersPage.jsx';
import NotFoundPage from './components/common/NotFoundPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutPage} />
        <Route path='/users' component={UsersPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}
