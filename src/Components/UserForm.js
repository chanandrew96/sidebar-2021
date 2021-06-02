import react from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import "../Stylesheets/UserForm.css";

class UserForm extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Form className="border border-black p-3">
          <Form.Label>Login / Register</Form.Label>
          <InputGroup className="inputGroup">
            <InputGroup.Text className={"inputGroupDesc"}>
              User Name
            </InputGroup.Text>
            <FormControl placeholder="User Name"></FormControl>
          </InputGroup>
          <InputGroup className="inputGroup">
            <InputGroup.Text className={"inputGroupDesc"}>
              Password
            </InputGroup.Text>
            <FormControl placeholder="Password"></FormControl>
            <InputGroup.Checkbox></InputGroup.Checkbox>
          </InputGroup>
        </Form>
      </>
    );
  }
}

export default UserForm;
