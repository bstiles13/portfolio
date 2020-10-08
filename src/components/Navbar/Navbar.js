import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

import './Navbar.scss';

export class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className='navbar' inverted size='huge'>
        <div className='navbar-title'>
          <div className='text'>Brandon Stiles</div>
          <div className='sub-text'>Software Engineer</div>
        </div>
        <div>
          <Icon name='github' size='large' />
          <Icon name='linkedin' size='large' />
          <Icon name='stack overflow' size='large' />
        </div>
        <Menu.Menu>
          <Menu.Item
            as={Link}
            to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/projects'
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/contact'
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
