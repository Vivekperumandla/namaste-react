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
      <div className="flex mt-7 justify-center">
        <img className="w-[20px] mr-2" src={data.avatar_url} />
        <h3 className="font-bold mr-2">Name: {data.login}</h3>
        <h4 className="font-bold">Updated: {data.updated_at}</h4>
      </div>
    );
  }
}

export default UserClass;
