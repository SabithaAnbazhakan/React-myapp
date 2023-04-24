import React from "react";

class Controlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoginSuccess: false,
      isLoginFail: false,
    };
    this.inputonChange = this.inputonChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  inputonChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);

    if (this.state.username === "sabitha" && this.state.password === "26600") {
      this.setState({
        isLoginSuccess: true,
        isLoginFail: false,
      });
    } else {
      this.setState({
        isLoginSuccess: false,
        isLoginFail: true,
      });
    }
  }

  render() {
    return (
      <div className="form-outer">
        <h2>Controlled</h2>
        <form>
          <div className=" mb-6">
            <label>Username:</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.inputonChange}
            />
          </div>
          <div className=" name mb-6">
            <label>password:</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.inputonChange}
            />
          </div>
          <button type="submit" className="inbtn" onClick={this.submit}>
            Login
          </button>
          <Loginstatus
            success={this.state.isLoginSuccess}
            fails={this.state.isLoginFail}
          ></Loginstatus>
        </form>
      </div>
    );
  }
}

function Loginstatus(props) {
  if (props.success || props.fails) {
    return props.success ? (
      <div className="lgbtn">Logged in Successfully</div>
    ) : (
      <div>Logged in failed</div>
    );
  }
}
export default Controlled;
