import React from "react";
import FriendsList from "./FriendsList";
//a

class App extends React.Component {
  render() {
    const friends = ["Jordyn", "Mikenzi", "Jake"];

    return (
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <FriendsList list={friends} />
      </div>
    );
  }
}

export default App;
