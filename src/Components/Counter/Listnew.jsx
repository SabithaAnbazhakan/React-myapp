import React from "react";

class Listnew extends React.Component {
  constructor(props) {
    super(props);
    this.inputOnchange = this.inputOnchange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      name: "",
      Designation: "",

      userList: [
        {
          id: 1,
          name: "sabitha",
          Designation: "Developer",
        },
        {
          id: 2,
          name: "abi",
          Designation: "Developer",
        },
        {
          id: 3,
          name: "mathu",
          Designation: "Developer",
        },
        {
          id: 4,
          name: "jothi",
          Designation: "Developer",
        },
      ],
    };
  }
  inputOnchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submit(event) {
    event.preventDefault();
    // console.log(this.state.username, this.state.Designation);

    var newUser = {
      id: this.state.userList.length + 1,
      name: this.state.name,
      Designation: this.state.Designation,
    };
    this.setState({
      userlist: this.state.userList.push(newUser),
    });
  }
  render() {
    return (
      <>
        <div className="form-outer mb-6">
          <h3>Addlist</h3>
          <form onSubmit={this.submit}>
            <label>name:</label>
            <input
              className="btn btn-secondary mb-6"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name"
              onChange={this.inputOnchange}
            ></input>
            <br></br>
            <br></br>
            <label>Design:</label>
            <input
              className="btn btn-secondary"
              type="text"
              name="Designation"
              value={this.state.Designation}
              onChange={this.inputOnchange}
            ></input>

            <br></br>
            <br></br>
            <button className="btn btn-success" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="container">
          <h4>Table List</h4>
          <table className="table table-dark table-striped">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.Designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Listnew;
