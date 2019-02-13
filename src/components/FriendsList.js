import React from "react";

function FriendsList(props) {
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}>
          <span>{name}</span>
          <button onClick={() => props.onRemoveFriend(name)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
//a
export default FriendsList;
