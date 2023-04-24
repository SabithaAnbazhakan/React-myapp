import React from "react";
import FormComponent from "./Form";

class Listadd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [
        {
          id: 1,
          name: "sabitha",
          design: "developer",
        },
        {
          id: 2,
          name: "Harshitha",
          design: "developer",
        },
        {
          id: 3,
          name: "trisha",
          design: "developer",
        },
        {
          id: 4,
          name: "arthi",
          design: "developer",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <FormComponent></FormComponent>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Design</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.design}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Listadd;
