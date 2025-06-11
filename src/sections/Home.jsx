import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';

export default class Home extends Component {
  render() {
    return (
    <section id={this.props.id} className="home">
      <div >
      <h4>Hello, I'm</h4>
      <h1>Srivathsan Ganesan</h1>
      <h3>Software Engineer</h3>
      <p>Passionate engineer with expertise in developing advanced systems for Automated Mobile Robots (AMRs) and Automated Guided Vehicles (AGVs). Specialized in fleet management solutions and intuitive control interfaces.</p>
      <div>
      <IconButton color="secondary" aria-label="add an alarm">
        <MailIcon />
      </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
        <GitHubIcon />
      </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
        <LinkedInIcon />
      </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
        <CallIcon />
      </IconButton>
      </div>
      </div>
    </section>
    )
  }
}
