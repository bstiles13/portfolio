import React from "react";
import { map } from "lodash";
import { Card, Button, Icon, Image } from "semantic-ui-react";
import { projects } from "../../constants";
import MerkleLogo from "../../assets/projects/merkle.png";

import "./Projects.scss";

const mapProjects = () => {
  return map(projects, (project, i) => {
    return (
      <Card
        key={`project-${i}`}
        className='projects-card'
        color={project.flagged && "red"}
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
            as={"a"}
            href={project.url}
            target='_blank'
            color='blue'
          >
            <Icon name='hand pointer outline' />
              Open App
          </Button>
          <Button
            as={"a"}
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
    <div className='projects'>
      <Card className='projects-card'>
        <Image src={MerkleLogo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Merkle-One (M1)</Card.Header>
          <Card.Meta>Merkle Inc. (Private)</Card.Meta>
          <Card.Description>
            {"Dentsu Aegis Network's M1 Platform is like a GPS. It’s an accurate, intuitive, and automated system that can pinpoint people, gets you to your destination faster with less hassle, gives you feedback on your progress, and re-routes you when you’re off course. Our identity-first approach makes planning, buying and measuring people-based campaigns faster and easier than ever."}<sup>1</sup>
            <div className='projects-card-source'>
              1.&nbsp;
              <span>The People-Based Advertising Product</span>
              &nbsp;|&nbsp;Merkle&nbsp;
              <a href='https://www.merkleinc.com/' rel='noopener noreferrer' target='_blank'>merkleinc.com</a>
            </div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className='projects-card-buttons'>
          <Button
            as={"a"}
            href='https://www.merkleinc.com/m1'
            target='_blank'
            color='grey'
          >
            <Icon name='info circle' />
              About M1
          </Button>
        </Card.Content>
      </Card>
      {mapProjects()}
    </div>
  );
};
