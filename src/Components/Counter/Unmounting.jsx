import React from "react";
class Unmounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.removeHeader = this.removeHeader.bind(this);
  }
  removeHeader() {
    this.setState({
      show: false,
    });
  }
  render() {
    if (this.state.show) {
      var head = <Header />;
    }
    return (
      <div>
        {head}
        <button onClick={this.removeHeader}>Remove</button>
      </div>
    );
  }
}
class Header extends React.Component {
  componentWillUnmount() {
    alert("component is removed from DOM");
  }
  render() {
    return (
      <div>
        <h3>Header</h3>
      </div>
    );
  }
}
export default Unmounting;
