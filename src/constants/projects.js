export const projects = [
  {
    image: require('../assets/projects/wreck_finder.png'),
    title: 'Wreck Finder',
    description: 'Search for over 24,000 shipwrecks and obstructions recorded in United States and territorial waters. Wreck data is extracted from NOAA archives and imported into MongoDB. React-Redux frontend features an advanced search, articles, and user favorites. Backend is built with Node.js, Express, MongoDB and Passport. Mapping via Leaflet.',
    created: 2020,
    url: 'https://wreck-finder.herokuapp.com/',
    urlGithub: 'https://github.com/bstiles13/wreckfinder'
  },
  {
    image: require('../assets/projects/space_invaders.png'),
    title: 'Space Invaders',
    description: 'A spin on the classic Space Invaders arcade game. The app utilizes P5’s canvas library for game mechanics, React for the frontend UI, Node / Express for the backend and MongoDB / Facebook Login for user scores.',
    created: 2020,
    url: 'https://invaders-app.herokuapp.com/',
    urlGithub: 'https://github.com/bstiles13/space-invaders',
    flagged: true
  },
  {
    image: require('../assets/projects/carpe_diem.png'),
    title: 'Carpe Diem',
    description: 'Reinvent your homepage and bookmark experience. Save your favorite websites, view the local weather forecast, and explore events in your city. SPA frontend is piloted by React. Backend features Node, Express, and MongoDB. APIs include Yahoo Weather and Eventful.',
    created: 2017,
    url: 'https://carpehomepage.herokuapp.com/',
    urlGithub: 'https://github.com/bstiles13/Carpe-Diem',
    flagged: true
  },
  {
    image: require('../assets/projects/star_wars_forum.png'),
    title: 'Star Wars Forum',
    description: 'An online community for Star Wars enthusiasts. Discuss anything about our favorite galaxy far, far away. Frontend features SPA architecture via React-Redux. Backend is supported by Node, Express, MongoDB, and bcrypt.',
    created: 2017,
    url: 'https://starwarsforum.herokuapp.com/',
    urlGithub: 'https://github.com/bstiles13/Star-Wars-Forum',
    flagged: true
  }
];
