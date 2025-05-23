import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Corp',
      period: '2020 - Present',
      description: 'Developed and maintained web applications using React.'
    },
    // Add more experiences
  ];
    return (
    <section id={this.props.id} className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3>{exp.role}</h3>
            <h4>{exp.company} | {exp.period}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
    )
  }
}
