import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import Resume from "../../assets/BrandonStilesResume.pdf";

import "./Navbar.scss";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleResumeClick = () => window.open(Resume, "_blank");

  return (
    <Menu className='navbar' inverted>
      <div className='navbar-title' onClick={() => navigate("/")}>
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
        />
        <Menu.Item
          as={NavLink}
          to='/projects'
          name='projects'
          exact
        />
        <Menu.Item
          as={NavLink}
          to='/contact'
          name='contact'
          exact
        />
        <Menu.Item
          name='resume'
          onClick={handleResumeClick}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
