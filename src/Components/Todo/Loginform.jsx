import React from "react";
import "../../../src/Bootstrap.css";
import Authentication from "./Authentication";
class Loginform extends React.Component {
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
      Authentication.setLoggedUser(this.state.username);
      this.props.navigate(`/Welcome/${this.state.username}`);

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
      <>
        {/* <form> */}
        <div className="container">
          <div className=" row justify-content-center ">
            <div className="row mt-4">
              <div className="card  col-md-3  bg-warning ">
                {/* <div className="form-outer "> */}
                <h2 class="text-Dark justfy-center">LOGIN FORM</h2>
                <form className="mb-4">
                  {/* <div row mt-3> */}
                  <label>Username:</label>

                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.inputonChange}
                  />
                  {/* </div> */}
                  {/* </div> */}
                  <br></br>
                  <br></br>
                  {/* <div className=" "> */}
                  <label>Password:</label>

                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.inputonChange}
                  />
                  {/* </div> */}
                  <br></br>
                  <br></br>
                  <button
                    type="submit"
                    className="
                    btn
                    btn-success
  
                    mb-2"
                    text="text-center "
                    onClick={this.submit}
                  >
                    Login
                  </button>

                  <Loginstatus
                    success={this.state.isLoginSuccess}
                    fails={this.state.isLoginFail}
                  ></Loginstatus>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* </form> */}
      </>
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
export default Loginform;
