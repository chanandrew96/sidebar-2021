import react from "react";
import { Card } from "react-bootstrap";

class Room extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: this.props.roomData || {
        title: "Room 153",
        imgSrc: "https://dummyimage.com/300x200",
        text: "This is room 153"
      }
    };
  }
  render() {
    return (
      <>
        <Card style={this.props.cardStyle}>
          <Card.Body>
            <Card.Img variant="top" src={this.state.room.imgSrc}></Card.Img>
            <Card.Title>{this.state.room.title}</Card.Title>
            <Card.Text>{this.state.room.text}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Room;
