import react from "react";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

class NewQuestion extends react.Component {
  render() {
    return (
      <>
        <h1>This is NewQuestion Page!</h1>
        <Card>
          <Card.Body>
            <InputGroup className={"m-1"}>
              <InputGroup.Prepend>
                <InputGroup.Text>Question</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Question" type="text"></FormControl>
            </InputGroup>
            <InputGroup className={"m-1"}>
              <Button variant="outline-secondary">Add</Button>
            </InputGroup>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default NewQuestion;
