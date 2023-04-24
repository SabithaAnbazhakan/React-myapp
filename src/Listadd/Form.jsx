import React from "react";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      design: "",
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
    // console.log(this.state.username, this.state.password);
    var newuser = {
      id: 1,
      name: this.state.name,
      design: this.state.design,
    };
    this.setState({
      userList: this.state.userList.push(newuser),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center"></div>
        <div className="col-md-4"></div>
        <h3>User Form</h3>
        <form>
          <div className=" mb-3">
            <label className="form=label">name:</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={this.inputonChange}
            />
          </div>
          <div className=" name mb-6">
            <label className="form=label">design:</label>
            <input
              type="test"
              placeholder="password"
              name="design"
              value={this.state.design}
              onChange={this.inputonChange}
            />
          </div>

          <br></br>
          <button type="submit" className="inbtn" onClick={this.submit}>
            Addname
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
