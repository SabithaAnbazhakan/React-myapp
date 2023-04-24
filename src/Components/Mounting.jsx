import React from "react";
class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
  }
  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       color: props.favcolor,
  //     };
  //   }
  render() {
    return (
      <div className="Mounting">
        <div style={{ fontSize: "26px" }}>
          My Favourite color is {this.state.color}
        </div>
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "sky blue",
      });
    }, 5000);
  }
}
export default Mounting;
