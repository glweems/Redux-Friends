import React from "react";
import { connect } from "react-redux";

import { Card, CardHeader, CardText, CardBody } from "reactstrap";

import FriendForm from "./FriendForm";

const Protected = props => (
  <>
    {props.fetchingFriends && <h2>Loading!</h2>}
    {props.error && <h2>{props.error}</h2>}
    <FriendForm />
    {props.friends.map(friend => (
      <Card className="friendCard">
        <CardBody>
          <CardHeader>{friend.name}</CardHeader>
          <CardText>Age: {friend.age}</CardText>
          <CardText>Email: {friend.email}</CardText>
        </CardBody>
      </Card>
    ))}
  </>
);

const mstp = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error
  };
};
export default connect(mstp)(Protected);
