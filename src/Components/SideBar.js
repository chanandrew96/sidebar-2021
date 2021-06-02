import react from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { Router, Switch, Route } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageRouting from "../Routing/PageRouting";
import {
  faCheckSquare,
  faCoffee,
  faPlusSquare,
  faUser,
  faHome,
  faQuestion,
  faPen,
  faPersonBooth,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faUser,
  faPlusSquare,
  faHome,
  faQuestion,
  faPen,
  faPersonBooth,
  faSignInAlt
);

class SideBar extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onNavSelect = (eventKey) => {
    this.setState({ selectNavItem: eventKey });
    this.props.onSelectNavItemChanged(eventKey);
  };

  render() {
    // Display class use reference to site
    // https://mdbootstrap.com/docs/react/utilities/display/
    // Resolve Nav.Link & router Link
    // https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
    return (
      <>
        <Nav
          // fill
          variant="pills"
          className=" rounded border border-dark flex-column"
          // flex-column
          style={{ ...this.props.style }}
          defaultActiveKey={this.props.selectNavItem}
          onSelect={this.onNavSelect}
        >
          <Nav.Item>
            <Nav.Link
              className="nav-item nav-link"
              // href="/home"
              eventKey="home"
              to={"/"}
              as={Link}
            >
              <FontAwesomeIcon icon="home" className="" />
              <span className="d-none d-sm-block">Home</span>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            title={<FontAwesomeIcon icon="plus-square" className="" />}
            id="navNewDropdown"
          >
            <NavDropdown.Item
              id="navNewRoom"
              eventKey="room"
              to={"/room"}
              as={Link}
            >
              <FontAwesomeIcon icon="person-booth" className="" />
              <span>Room</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              id="navNewQuestion"
              eventKey="question"
              to={"/question"}
              as={Link}
            >
              <FontAwesomeIcon icon="question" className="" />
              <span>Question</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              id="navNewAnswer"
              eventKey="answer"
              to={"/answer"}
              as={Link}
            >
              <FontAwesomeIcon icon="pen" className="" />
              <span>Answer</span>
            </NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Item>
            <Nav.Link
              className="nav-item nav-link"
              eventKey="new"
              to={"/new"}
              as={Link}
            >
              <FontAwesomeIcon icon="plus-square" className="" />
              <span className="d-none d-sm-block">New</span>
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link
              className="nav-item nav-link"
              eventKey="join"
              to={"/join"}
              as={Link}
            >
              <FontAwesomeIcon icon="sign-in-alt" className="" />
              <span className="d-none d-sm-block">Join</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Link to={"/user"}> */}
            <Nav.Link
              className="nav-item nav-link ml-auto"
              eventKey="user"
              to={"/user"}
              as={Link}
            >
              <FontAwesomeIcon icon="user" className="" />
              <span className="d-none d-sm-block">User</span>
            </Nav.Link>
            {/* </Link> */}
          </Nav.Item>
        </Nav>
      </>
    );
  }
}

export default SideBar;
