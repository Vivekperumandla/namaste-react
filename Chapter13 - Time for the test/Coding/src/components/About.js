import User from "./User";
import { Component } from "react";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";

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
      <div className="font-bold mt-4">
        <h1 className=" text-center">About</h1>
        <userContext.Consumer>
          {({ logggedInUser }) => (
            <h1 className="text-center">{logggedInUser}</h1>
          )}
        </userContext.Consumer>
        <h2 className=" text-center">This is Namaste React Web Series</h2>
        <UserClass data={data} />
      </div>
    );
  }
}

export default About;
