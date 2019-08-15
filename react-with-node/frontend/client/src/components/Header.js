import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li style={{margin: '0 10px'}} key="3">Credits:{this.props.auth.credits} </li>,
          <li>
            <a key="2" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }
  render() {

    return (
      <nav>
        <div className="nav-wrapper">
        {console.log(this.props)}
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
            {/* <li>
              <a>Login With Google</a>
            </li> */}
            {/* <li><a href="badges.html">Components</a></li> */}
            {/* <li><a href="collapsible.html">JavaScript</a></li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth
  };
}
export default connect(mapStateToProps)(Header);
