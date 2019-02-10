import React from "react";
import FriendsList from "./FriendsList";
//a

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: ["Jordyn", "Mikenzi", "Jake"]
    };
  }
  render() {
    return (
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <FriendsList list={this.state.friends} />
      </div>
    );
  }
}

export default App;
