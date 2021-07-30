import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Home screen</h1>
        <a>
          <Link to="/about">Go to about screen</Link>
        </a>
      </div>
    );
  }
}
