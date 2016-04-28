import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import AppContainer from './containers/AppContainer'
import MealLayout from './components/MealLayout'
import About from './components/About'

export default (
	    <Route component={AppContainer}>
	    	<Route path="/" component={MealLayout}></Route>
	    	<Route path="/about" component={About}></Route>
	    </Route>
)
