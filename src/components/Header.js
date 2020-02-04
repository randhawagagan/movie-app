import React from "react";
import logo from '../disney.svg';
import '../App.css'
const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" />
      <h2 className="headertext">{props.text}</h2>
    </header>
  );
};

export default Header;