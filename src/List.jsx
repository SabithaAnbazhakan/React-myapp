import React from "react";

class List extends React.Component {
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
          name: "john",
          Designation: "Developer",
        },
        {
          id: 2,
          name: "tommy",
          Designation: "Developer",
        },
        {
          id: 3,
          name: "joey",
          Designation: "Developer",
        },
        {
          id: 4,
          name: "hanky",
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
        <div className="form-outer">
          <h3>Controlled component</h3>
          <form onSubmit={this.submit}>
            <label>name</label>
            <input
              className="btn btn-success"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name"
              onChange={this.inputOnchange}
            ></input>
            <br></br>
            <label>Design</label>
            <input
              className="btn btn-success"
              type="text"
              name="Designation"
              value={this.state.Designation}
              onChange={this.inputOnchange}
            ></input>
            <br></br>
            <button className="btn btn-danger" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="container">
          <h4>Table List</h4>
          <table className="table table-primary table-striped">
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
export default List;
