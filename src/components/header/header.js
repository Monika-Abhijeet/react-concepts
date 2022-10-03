import { Component } from "react";
import "./header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="header-wrapper">
      <ul>
        <Link to="/hoc">
          <li>HOC</li>
        </Link>

        <Link to="/redux">
          <li>Redux</li>
        </Link>
        <Link to="/hook">
          <li>Hooks</li>
        </Link>
        <Link to="/signin">
          <li>Signin</li>
        </Link>
      </ul>
      <h2>Counter: {counter}</h2>
    </div>
  );
}

export default Header;
