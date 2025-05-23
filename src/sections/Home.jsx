import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
    <section id={this.props.id} className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a passionate developer showcasing my work and skills.</p>
    </section>
    )
  }
}
