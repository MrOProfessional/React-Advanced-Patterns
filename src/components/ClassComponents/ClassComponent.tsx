import React, { Component } from "react";

interface MyComponentProps {
  lastName:string;
}

interface MyComponentState {
  name: string;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
  /* Adding state and binding custom methods */
  constructor(props: MyComponentProps) {
    super(props);
    this.state = { name: "User" }; // State must be an object

    this.customMethodOne = this.customMethodOne.bind(this);
    this.customMethodTwo = this.customMethodTwo.bind(this);
  }

  /* Lifecycle Methods */
  componentDidMount() {
    console.log("Component mounted and initialized");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  /* Custom methods */
  customMethodOne() {
    console.log("Custom Method One Called");
  }

  customMethodTwo() {
    console.log("Custom Method Two Called");
  }

  /* Getter for state name */
  get name(): string {
    return this.state.name;
  }

  render() {
    return (
      <div>
        <p>Hello World + {this.name}</p>
      </div>
    );
  }
}

export default MyComponent;
