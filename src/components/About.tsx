import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About screen</h1>
        <a>
          <Link to="/">Go back to home screen</Link>
        </a>
      </div>
    );
  }
}
