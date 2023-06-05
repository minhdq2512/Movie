import React from "react";
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import "../App";
import Icon from "@material-ui/core/Icon";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LineWeightIcon from "@material-ui/icons/LineWeight";
import ContactsIcon from "@material-ui/icons/Contacts";

function Navigation() {
  return (
    <Navbar
      className="menu"
      alignLinks="right"
      brand={<span className="brand-logo">Korean Flims</span>}
      id="mobile-nav"
      menuIcon={<Icon>Menu</Icon>}
    >
      <ul>
        <li>
          <Link to="/">
            <div className="home-icon-logo">
              <span style={{ lineHeight: "1.4" }}>
                <HomeIcon fontSize="Large" />{" "}
              </span>
              <span style={{ marginLeft: "10px" }}>Home</span>
            </div>

            {/* <HomeIcon sx={{ marginTop ="20px"}}/> */}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div className="home-icon-logo">
              <span style={{ lineHeight: "1.4" }}>
                <InfoIcon>About</InfoIcon>
              </span>
              <span style={{ marginLeft: "10px" }}>About</span>
            </div>
          </Link>
        </li>
        <li to="/news">
          <Link to="/news">
            <div className="home-icon-logo">
              <span style={{ lineHeight: "1.4" }}>
                <LineWeightIcon>News</LineWeightIcon>
              </span>
              <span style={{ marginLeft: "10px" }}>News</span>
            </div>
          </Link>
        </li>

        <li href="contact">
          <Link to="/contact">
            <div className="home-icon-logo">
              <span style={{ lineHeight: "1.4" }}>
                <ContactsIcon>Contact</ContactsIcon>{" "}
              </span>
              <span style={{ marginLeft: "10px" }}>Contact</span>
            </div>
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}

export default Navigation;
