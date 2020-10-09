import React from 'react';
import { map } from 'lodash';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import { projects } from '../../constants';

import './Projects.scss';

const mapProjects = () => {
  return map(projects, (project, i) => {
    return (
      <Card
        key={`project-${i}`}
        className='projects-card'
        color={project.flagged && 'red'}
      >
        {project.flagged && (
          <div className='projects-card-flagged-header'>Under Maintenance</div>
        )}
        <Image src={project.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{project.title}</Card.Header>
          <Card.Meta>Created {project.created}</Card.Meta>
          <Card.Description>
            {project.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className='projects-card-buttons'>
          <Button
            as={'a'}
            href={project.url}
            target='_blank'
            color='green'
          >
            <Icon name='hand pointer outline' />
              Open App
          </Button>
          <Button
            as={'a'}
            href={project.urlGithub}
            target='_blank'
            color='black'
          >
            <Icon name='github' />
              GitHub
          </Button>
        </Card.Content>
      </Card>
    );
  });
};

export const Projects = () => {
  return (
    <div className='projects'>{mapProjects()}</div>
  );
};
