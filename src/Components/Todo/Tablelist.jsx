import React from "react";
import "../../../src/Bootstrap.css";

class Tablelist extends React.Component {
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
          name: "praba",
          Designation: "Developer",
          status: false,
          date: new Date(),
        },
        {
          id: 2,
          name: "Ruby",
          Designation: "Developer",
          status: false,
          date: new Date(),
        },
        {
          id: 3,
          name: "john",
          Designation: "Developer",
          status: false,
          date: new Date(),
        },
        {
          id: 4,
          name: "Sabitha",
          Designation: "Developer",
          status: false,
          date: new Date(),
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
        <div className="container">
          <h4>Table List</h4>
          <table className="table table-dark table-striped">
            <thead className="table-secondary">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Designation</th>
                <th>status</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.Designation}</td>
                  <td>{user.status.toString()}</td>
                  <td>{user.date.toString()}</td>
                  <td>
                    <button className="btn btn-info">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Tablelist;
