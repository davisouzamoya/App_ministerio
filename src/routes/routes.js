import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import RegisterMusic from '../pages/RegisterMusic/index';
import List from '../pages/List/index';
import Profile from '../pages/Profile/index';

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={RegisterMusic}/>
      <Route path="/list" component={List}/>
      <Route path="/profile" component={Profile}/>
    </BrowserRouter>
  )
}

export default Routes;