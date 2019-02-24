import React, { Component } from 'react'

export class Header extends Component {
  render() {
      const Steeze = {
        "paddingTop": "15px",
      }
    return (
      <div style={Steeze}>
        <p>Create and save your theme! Click on the logo to shift speeds</p>
      </div>
    )
  }
}

export default Header
