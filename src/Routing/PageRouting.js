import react from "react";
// import { Switch, IndexRoute, Router, Route, Link, Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import App from "../App";
import NewQuestion from "../Pages/NewQuestion";
import NewAnswer from "../Pages/NewAnswer";
import NewRoom from "../Pages/NewRoom";
import JoinRoom from "../Pages/JoinRoom";
import UserManagement from "../Pages/UserManagement";

class PageRouting extends react.Component {
  render() {
    return (
      <>
        <Switch>
          {/* <Route path="/" component={App}>
              <IndexRoute componenet={App} />
              <Route exact path="home" componenet={App} /> */}
          {/* <Route path="new" component={New}> */}
          <Route path="/room" component={NewRoom} />
          <Route path="/question" component={NewQuestion} />
          <Route path="/answer" component={NewAnswer} />
          {/* <Redirect from="room" to="/room" />
          <Redirect from="question" to="/question" />
          <Redirect from="answer" to="/answer" /> */}
          {/* </Route> */}
          <Route path="/join" component={JoinRoom} />
          <Route path="/user" component={UserManagement} />
          {/* </Route> */}
        </Switch>
      </>
    );
  }
}

export default PageRouting;
