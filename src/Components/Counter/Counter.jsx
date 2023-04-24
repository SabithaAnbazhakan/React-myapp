import "../Counter/Counter.css";
import React from "react";
import "../../../src/Bootstrap.css";

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countAll: 0,
    };
    this.incrementAll = this.incrementAll.bind(this);
    this.decrementAll = this.decrementAll.bind(this);
  }
  incrementAll(value) {
    this.setState({ countAll: this.state.countAll + value });
  }
  decrementAll(value) {
    this.setState({ countAll: this.state.countAll - value });
  }

  render() {
    return (
      <div className="App">
        <Counter
          val={1}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          val={5}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          val={10}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <div className="incVal">{this.state.countAll}</div>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div>
        <button className="incBtn" onClick={this.increment}>
          {this.props.val}
        </button>
        <span className="incVal" style={{ fontSize: "25px" }}>
          {this.state.count}
          <button className="incBtn" onClick={this.decrement}>
            {this.props.val}
          </button>
        </span>
      </div>
    );
  }

  increment() {
    this.setState({
      count: this.state.count + this.props.val,
    });
    this.props.incrementAll(this.props.val);
  }
  decrement() {
    this.setState({
      count: this.state.count - this.props.val,
    });
    this.props.decrementAll(this.props.val);
  }
}
Counter.defaultProps = {
  val: 1,
};

export default AddComponent;
