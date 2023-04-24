import React from "react";
class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({
      color: "white",
    });
  }
  shouldComponentUpdate() {
    return true;
  }
  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       color: props.favcolor,
  //     };
  //   }
  render() {
    return (
      <div className="Updating">
        <div style={{ fontSize: "26px" }}>
          My Favourite color is {this.state.color}
        </div>
        <button onClick={this.changeColor}>change</button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevState.color);
    document.getElementById("div1").innerHTML =
      "this previous state color was" + " " + prevState.color;
    return null;
  }
  componentDidUpdate() {
    console.log(this.state.color);
    document.getElementById("div2").innerHTML =
      "this current state color is" + " " + this.state.color;
  }
}
export default Updating;
