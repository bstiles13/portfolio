import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import Resume from '../../assets/BrandonStilesResume.pdf';

import './Navbar.scss';

export class Navbar extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleResumeClick = () => window.open(Resume, '_blank');

  render() {
    return (
      <Menu className='navbar' inverted>
        <div className='navbar-title' onClick={e => this.props.history.push('/')}>
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
        <Menu.Menu className='navbar-routes'>
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
          <Menu.Item
            name='resume'
            onClick={this.handleResumeClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
