import React from 'react';

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
    </div>
  );
};
