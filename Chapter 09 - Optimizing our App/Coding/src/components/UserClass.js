import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
  }
  componentDidMount() {
    this.time = setInterval(() => {
      console.log("Timer display");
    }, 1000);
    console.log("Child Did mount");
  }
  componentDidUpdate() {
    console.log("Child Did update");
  }
  componentWillUnmount() {
    clearInterval(this.time);
    console.log("Child UNMOUNT");
  }
  render() {
    console.log("Child render");
    const { data } = this.props;
    console.log(this.props);
    return (
      <div className="user-card">
        <img src={data.avatar_url} />
        <h3>Name: {data.login}</h3>
        <h4>Updated: {data.updated_at}</h4>
      </div>
    );
  }
}

export default UserClass;
