import react from "react";
import NewQuestion from "../Pages/NewQuestion";
import BreadcrumbRow from "./BreadcrumbRow";
import PageRouting from "../Routing/PageRouting";

class MainBody extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbDict: {
        home: [{ href: "home", name: "Home" }],
        new: [{ href: "new", name: "New" }],
        room: [
          { href: "add", name: "Add" },
          { href: "room", name: "Room" }
        ],
        question: [
          { href: "add", name: "Add" },
          { href: "question", name: "Question" }
        ],
        answer: [
          { href: "add", name: "Add" },
          { href: "answer", name: "Answer" }
        ],
        join: [{ href: "join", name: "Join" }],
        user: [{ href: "user", name: "User" }]
      },
      breadcrumbList: [
        { href: "home", name: "1" },
        { href: "home", name: "2" }
      ]
    };
  }
  render() {
    return (
      // <div className="d-flex flex-column">
      //   <h1>Hello CodeSandbox</h1>
      //   <h2>Start editing to see some magic happen!</h2>
      // </div>
      <>
        <div className="flex-column flex-fill p-1">
          <BreadcrumbRow
            // itemStyle={{ "vertical-align": "top" }}
            itemClassName={"text-secondary m-1"}
            style={{ "vertical-align": "middle" }}
            className={"border rounded border-secondary"}
            breadcrumbList={this.state.breadcrumbDict[this.props.selectNavItem]}
          ></BreadcrumbRow>
          <div style={{ margin: "1em" }}>
            <PageRouting />
          </div>
          {/* <p>eventKey selected {this.props.selectNavItem}</p> */}
          {/* {this.props.selectNavItem === "question" && <NewQuestion />} */}
        </div>
      </>
    );
  }
}

export default MainBody;
