import React, { Component } from "react";
import { Flims } from "../Shared/ListOfFlims";
import FlimMap from "./Flim";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      flims: Flims,
    };
  }

  render() {
    return <FlimMap flim={this.state.flims} />;
  }
}
export default Main;
