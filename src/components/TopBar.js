import React from 'react'
import { Nav, NavItem, Navbar, Glyphicon } from 'react-bootstrap'
import '../css/top-bar.css'

const TopBar = ({ toggleSideBar }) => (
  <Navbar fixedTop fluid staticTop>
    <Nav>
      <NavItem eventKey={1} href="#" onClick={toggleSideBar}><Glyphicon glyph="menu-hamburger"/></NavItem>
    </Nav>
    <Navbar.Brand>
      <a href="/">Buymart</a>
    </Navbar.Brand> 
  </Navbar>
)

export default TopBar