import React, { Component } from 'react'
import TopBar from './TopBar'
import SideBarContent from './SideBarContent'
import SideBar from 'react-fixed-sidebar'

class App extends Component {
  toggleSideBar = event => {
    this.sidebar.toggle()
  }

  render() {
    return (
      <div>
        <TopBar toggleSideBar={this.toggleSideBar}/>
        <div className="container">
          {this.props.children}
        </div>
        <SideBar ref={(sidebar => this.sidebar = sidebar)}>
          <SideBarContent />
        </SideBar>
      </div>
    );
  }
}

export default App