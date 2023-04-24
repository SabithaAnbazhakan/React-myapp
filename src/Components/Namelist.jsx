import React from "react";

class Namelist extends React.Component {
  constructor(props) {
    super(props);
    // this.inputOnchange = this.inputOnchange.bind(this);
    // this.submit = this.submit.bind(this);
    this.state = {
      // name: "",
      // DOB: "",
      // Address: "",
      // Absent: "",

      userList: [
        {
          name: "roja",
          DOB: "22.08.2000",
          Address: "North street,sundarakottai",
          Absent: "false",
        },
        {
          name: "Anbu",
          DOB: "30.06.2014",
          Address: "Middle street,mannargudi",
          Absent: "false",
        },
        {
          name: "Hari",
          DOB: "17.12.2012",
          Address: "North street,pattukkottai",
          Absent: "false",
        },
        {
          name: "santhiya",
          DOB: "03.8.2022",
          Address: "big temple,mannai",
          Absent: "false",
        },
      ],
    };
  }
  // inputOnchange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }
  // submit(event) {
  //   event.preventDefault();
  // console.log(this.state.username, this.state.Designation);

  // var newUser = {
  //   id: this.state.userList.length + 1,
  //   name: this.state.name,
  //   Designation: this.state.Designation,
  // };
  //   this.setState({
  //     userlist: this.state.userList.push(newUser),
  //   });
  // }
  render() {
    return (
      <>
        <div className="container">
          <h4>Table List</h4>
          <table className="table table-primary table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Address</th>
                <th>Absent</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user) => (
                <tr key={user.DOB}>
                  <td>{user.name}</td>
                  <td>{user.DOB}</td>
                  <td>{user.Address}</td>
                  <td>{user.Absent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Namelist;
