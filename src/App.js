import React, { Component } from 'react';
import Line from './Line';
import Menu from './Menu';
import Meal from './Meal';
import MealList from './MealList';
import Meat from './Meat';
import Stars from './Stars';
import Tabs from './Tabs';
import CommentBox from './CommentBox';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: {
        lineSize: 0,
        lastUpdate: 0
      }
    }
  }
  render() {
    const { line } = this.state;
    return (
      <div>
        <Line {...line} handleLineUpdate={this.handleLineUpdate} />
        <Menu />
        <Meal />
        <MealList />
        <Meat />
        <Stars />
        <Tabs />
        <CommentBox />
      </div>
    );
  }

  handleLineUpdate = (e) => {
    this.setState({
      line: {
        lineSize: e.target.value
      }
    })
  }

}
