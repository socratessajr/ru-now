import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router'

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <Link to="/">
          <MenuItem value={1} primaryText="Restaurante Universitário"/>
        </Link>
        <MenuItem value={2} primaryText="Restaurante Espaço Multiuso"/>
        <MenuItem value={3} primaryText="Login/Cadastrar"/>
        <Link to="/about">
          <MenuItem value={4} primaryText="Sobre o app" />
        </Link>
      </DropDownMenu>
    );
  }
}