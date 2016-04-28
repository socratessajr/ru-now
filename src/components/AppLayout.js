import React from 'react'
import LineContainer from '../containers/LineContainer'
import Menu from './Menu'
import Meal from './Meal'
import MealList from './MealList'
import Meat from './Meat'
import Stars from './Stars'
import Tabs from './Tabs'
import CommentBox from './CommentBox'

const AppLayout = ({isLogged, userData, time}) =>  {
    return (
      <div>
        <h1>Relogio: {Math.floor(time / 1000 % 60)}</h1>
        <LineContainer time={time} />
        <Menu />
        <Meal />
        <MealList />
        <Meat />
        <Stars />
        <Tabs />
        <CommentBox />
      </div>
    )
}

export default AppLayout
