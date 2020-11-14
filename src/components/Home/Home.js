import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-section'>
        <div className='home-shape right' />
        <div className='home-content'>
          <div className='about'>
            <div className='about-row one'>{`Hi I'm Brandon,`}</div><br />
            <div className='about-row two'>Small town personality</div><br />
            <div className='about-row three'>Big city living</div><br />
            <div className='about-row four'>Worldly curiosity</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='home-intro'>
              <div className='home-intro-header home-intro-row one'>{`// life motto`}</div><br />
              <div className='home-intro-row two'>{`if (sad( ) === true) {`}</div><br />
              <div className='home-intro-row three'>{`sad( ).stop( );`}</div><br />
              <div className='home-intro-row four'>{`beAwesome( );`}</div><br />
              <div className='home-intro-row five'>{`}`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-section'>
        <div className='home-shape left' />
        <div className='home-content'>
          <div className='career'>
            <div className='home-content-header career-header'>Career</div>
            <div className='career-row'>
              {`As you read this I am most likely at a table writing and testing code, or thinking about code while not paying enough attention to my date or the drivers around me. When you love to code, love design and love being part of the human experience, you can't help but get excited to wake up and start another day of learning and creation.`}
            </div>
            <div className='career-row'>
              I have worked as a full-stack JavaScript Engineer at Merkle for three years, building tools that help our Fortune 500 clients execute people-based marketing and insights at scale. Before Merkle, I dipped my toes in tech by completing a full-stack Coding Boot Camp at UCLA, leaving behind a life in finance. Explore my growing
              &nbsp;
              <Link className='projects-link' to='/projects'>portfolio</Link>
            &nbsp;
            of projects that demonstrate my working knowledge of front-end and back-end web development.
            </div>
          </div>
          <div className='skills'>
            <div className='home-content-header skills-header'>Skills</div>
            <div className='skills-content'>
              <span>React</span>
              <span>Redux</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>Protractor</span>
              <span>Jasmine</span>
              <span>Jest / Enzyme</span>
              <span>Node</span>
              <span>Express</span>
              <span>DynamoDB</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>AWS</span>
              <span>Jenkins</span>
              <span>Webpack</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
