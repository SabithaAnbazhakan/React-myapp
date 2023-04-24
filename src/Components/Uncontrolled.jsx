import React from "react";
class Uncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.submit = this.submit.bind(this);
  }
  submit(event) {
    event.preventDefault();
    console.log(this.username.current.value);
    console.log(this.password.current.value);
  }

  render() {
    return (
      <div className="form-outer">
        <form>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            ref={this.username}
          />
          <label>password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            ref={this.password}
          />
          <button type="submit" onClick={this.submit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Uncontrolled;
