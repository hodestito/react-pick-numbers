import React from 'react'
import Config from './Config'
import './Header.css'

class Header extends React.Component {

  render() {
    return (
      <header className="app-header">
        <Config setParams={this.props.setParams.bind(this)} min={this.props.min} max={this.props.max} excludes={this.props.excludes}/>
      </header>
    );
  }
}

export default Header