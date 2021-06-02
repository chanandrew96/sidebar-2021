import "./styles.css";
import "./Components/SideBar";
import SideBar from "./Components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MainBody from "./Components/MainBody";
import react from "react";
import PageRouting from "./Routing/PageRouting";
import { BrowserRouter as Router } from "react-router-dom";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectNavItem: "home"
    };
  }

  onSelectNavItemChanged = (selectNavItem) => {
    this.setState({ selectNavItem });
  };

  render() {
    return (
      <Router>
        <div
          className="App d-flex flex-row flex-fill"
          style={{ height: "100%" }}
        >
          {/* flex-row align-content-around flex-wrap */}
          <SideBar
            className=""
            selectNavItem={this.state.selectNavItem}
            onSelectNavItemChanged={this.onSelectNavItemChanged}
            style={{ position: "sticky", left: 0 }}
            // style={{margin: "0 auto", overflow: "hidden"}}
          />
          <MainBody className="" selectNavItem={this.state.selectNavItem} />
        </div>
      </Router>
    );
  }
}

export default App;
