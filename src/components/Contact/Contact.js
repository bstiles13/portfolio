import React from 'react';
import { Icon } from 'semantic-ui-react';

import './Contact.scss';

export const Contact = () => {
  return (
    <div className='contact'>
      <h1>Connect with Me</h1>
      <div className='contact-row'>
        <div className='contact-row-label'>
          <Icon className='contact-row-icon' name='send'></Icon>
          <span>Email</span>
          <span className='contact-row-divider'>{`//`}</span>
        </div>
        <div className='contact-row-link'>
          <a href='mailto:bstiles13@gmail.com'>bstiles13@gmail.com</a>
        </div>
      </div>

      <div className='contact-row'>
        <div className='contact-row-label'>
          <Icon className='contact-row-icon' name='github' />
          <span>GitHub</span>
          <span className='contact-row-divider'>{`//`}</span>
        </div>
        <div className='contact-row-link'>
          <a href='https://github.com/bstiles13' rel='noopener noreferrer' target='_blank'>https://github.com/bstiles13</a>
        </div>
      </div>

      <div className='contact-row'>
        <div className='contact-row-label'>
          <Icon className='contact-row-icon' name='linkedin' />
          <span>LinkedIn</span>
          <span className='contact-row-divider'>{`//`}</span>
        </div>
        <div className='contact-row-link'>
          <a href='https://www.linkedin.com/in/brandon-stiles/' rel='noopener noreferrer' target='_blank'>https://www.linkedin.com/in/brandon-stiles/</a>
        </div>
      </div>

      <div className='contact-row'>
        <div className='contact-row-label'>
          <Icon className='contact-row-icon' name='stack overflow' />
          <span>StackOverflow</span>
          <span className='contact-row-divider'>{`//`}</span>
        </div>
        <div className='contact-row-link'>
          <a href='https://stackoverflow.com/users/7659370/brandon-stiles' rel='noopener noreferrer' target='_blank'>https://stackoverflow.com/users/7659370/brandon-stiles</a>
        </div>
      </div>
    </div>
  );
};
