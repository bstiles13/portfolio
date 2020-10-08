import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

import './Home.scss';

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-intro'>
        <div className='home-intro-header'>{`// life motto`}</div>
        <div>{`if (sad( ) === true) {`}</div>
        <div>{`sad( ).stop( );`}</div>
        <div>{`beAwesome( );`}</div>
        <div>{`}`}</div>
      </div>
      <div className='home-content'>
        <div className='about'>
          <div className='home-content-header about-header'>About</div>
          <div className='about-row'>
            {`As you read this I am most likely at a table writing and testing code, or thinking about code while not paying enough attention to my date or the drivers around me. When you love to code, love design and love being part of the human experience, you can't help but get excited to wake up and start another day of learning and creation.`}
          </div>
          <div className='about-row'>
            I completed the full-stack Coding Boot Camp at UCLA and have a robust
            &nbsp;
            <Link className='projects-link' to='/projects'>portfolio</Link>
            &nbsp;
            of projects to demonstrate my working knowledge of front-end and back-end web development.
          </div>
        </div>
        <div className='skills'>
          <div className='home-content-header skills-header'>Skills</div>
          <div className='skills-content'>
            <List className='skills-column'>
              <List.Item>HTML</List.Item>
              <List.Item>CSS / Sass</List.Item>
              <List.Item>JavaScript</List.Item>
              <List.Item>React</List.Item>
              <List.Item>Redux</List.Item>
              <List.Item>Angular 8</List.Item>
              <List.Item>Vue</List.Item>
              <List.Item>TypeScript</List.Item>
              <List.Item>Node</List.Item>
              <List.Item>Express</List.Item>
            </List>
            <List className='skills-column'>
              <List.Item>DynamoDB</List.Item>
              <List.Item>MongoDB</List.Item>
              <List.Item>MySQL</List.Item>
              <List.Item>AWS</List.Item>
              <List.Item>Jenkins</List.Item>
              <List.Item>Webpack</List.Item>
              <List.Item>Git</List.Item>
              <List.Item>Jasmine</List.Item>
              <List.Item>Protractor</List.Item>
              <List.Item>Jest / Enzyme</List.Item>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};
