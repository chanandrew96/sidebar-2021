import react from "react";
import RoomList from "../Components/RoomList";

class JoinRoom extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        {
          title: "Room 153",
          imgSrc: "https://dummyimage.com/300x200",
          text: "This is room 153"
        },
        {
          title: "Room 274",
          imgSrc: "https://dummyimage.com/300x200",
          text: "This is room 274"
        }
      ]
    };
  }
  render() {
    return (
      <>
        <RoomList rooms={this.state.rooms} />
      </>
    );
  }
}

export default JoinRoom;
