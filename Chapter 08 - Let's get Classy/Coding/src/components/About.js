import User from "./User";
import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
    console.log("Parent Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vivekperumandla");
    const json = await data.json();
    this.setState({ data: json });
    console.log("Parent Did mount");
  }
  render() {
    console.log("Parent render");
    const { data } = this.state;
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass data={data} />
      </div>
    );
  }
}

export default About;
