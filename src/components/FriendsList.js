import React from "react";

function FriendsList(props) {
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
//a
export default FriendsList;
