import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

import './Navbar.scss';

export class Navbar extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu className='navbar' inverted>
        <div className='navbar-title'>
          <div className='text'>Brandon Stiles</div>
          <div className='sub-text'>Software Engineer</div>
        </div>
        <div className='navbar-external-links'>
          <a
            className='external-link-icon'
            href='https://github.com/bstiles13'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Icon name='github' size='large' />
          </a>
          <a
            className='external-link-icon'
            href='https://www.linkedin.com/in/brandon-stiles/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Icon name='linkedin' size='large' />
          </a>
          <a
            className='external-link-icon'
            href='https://stackexchange.com/users/10386443/brandon-stiles'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Icon name='stack overflow' size='large' />
          </a>
        </div>
        <Menu.Menu>
          <Menu.Item
            as={NavLink}
            to='/'
            name='home'
            exact
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/projects'
            name='projects'
            exact
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/contact'
            name='contact'
            exact
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
