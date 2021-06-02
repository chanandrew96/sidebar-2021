import react from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Image,
  ToggleButton,
  InputGroup,
  FormControl
} from "react-bootstrap";
import Room from "./Room";

class RoomList extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardDisplay: false
    };
  }
  onCardDisplayChkChange = (event) => {
    console.log("## onCardDisplayChkChange ##", event);
  };
  render() {
    return (
      <div style={this.props.roomListStyle}>
        {/* <ToggleButton value={this.state.isCardDisplay}>
          isCardDisplay
        </ToggleButton> */}
        <InputGroup className="mb-3">
          <InputGroup.Checkbox onChange={this.onCardDisplayChkChange} />
          <InputGroup.Text>Display in List</InputGroup.Text>
        </InputGroup>
        {this.state.isCardDisplay ? (
          <div style={{ display: "inline-block" }}>
            <Room
              cardStyle={{ width: "18rem" }}
              isCardDisplay={this.state.isCardDisplay}
            />
          </div>
        ) : (
          <ListGroup>
            {this.props.rooms &&
              this.props.rooms.map((roomData, index) => {
                return (
                  <ListGroupItem
                    action
                    onClick={() => {
                      console.log("## onClick ##");
                    }}
                  >
                    <DisplayListGroupItem key={index} roomData={roomData} />
                    {/* <Room
                  cardStyle={{ width: "12rem" }}
                  isCardDisplay={this.state.isCardDisplay}
                  roomData={roomData}
                /> */}
                  </ListGroupItem>
                );
              })}
          </ListGroup>
        )}
      </div>
    );
  }
}

function DisplayListGroupItem(props) {
  return (
    <Container style={{ textAlign: "left", padding: "0.3em" }}>
      <Image
        className={"flex"}
        rounded
        src={props.roomData.imgSrc}
        style={{
          maxWidth: "5em",
          maxHeight: "3em",
          width: "auto",
          height: "auto",
          marginRight: "1em"
        }}
      />
      <span
        style={{
          marginRight: "1em"
        }}
      >
        <b>{props.roomData.title}</b>
      </span>
      <span
        style={{
          marginRight: "1em"
        }}
      >
        {props.roomData.text}
      </span>
    </Container>
  );
}

export default RoomList;
