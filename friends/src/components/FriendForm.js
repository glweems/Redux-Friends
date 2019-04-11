import React from "react";
import { Button } from "reactstrap";

class FriendForm extends React.Component {
  state = {
    friend: {
      name: "",
      age: " ",
      email: ""
    }
  };

  render() {
    return (
      <>
        <input name="name" type="text" placeholder="Name" />
        <input name="age" type="number" placeholder="Age" />
        <input name="email" type="email" placeholder="Email" />
        <Button color="primary">Add Friend</Button>
      </>
    );
  }
}

export default FriendForm;
