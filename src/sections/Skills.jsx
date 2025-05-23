import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    // Add more skills
    ];
    return (
    <section id={this.props.id} className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
    )
  }
}
