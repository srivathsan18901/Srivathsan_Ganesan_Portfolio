import React, { Component } from 'react'

export default class Education extends Component {
  render() {
  const educations = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'University of Tech',
      year: '2016 - 2020'
    },
    // Add more education entries
  ];

  return (
    <section id={this.props.id} className="education">
      <h2>Education</h2>
      <div className="education-list">
        {educations.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institution} | {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
  }
}
