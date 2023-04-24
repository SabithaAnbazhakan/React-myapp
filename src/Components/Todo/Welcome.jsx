import { Link, useNavigate } from "react-router-dom";

function Welcome(props) {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="container"> */}
      <p style={{ color: "red", fontSize: 30 }}>Welcome{props.params.name} </p>
      {/* <button
        type="submit"

        className="btn btn-success
         col-2"
        onClick={() => navigate("/Tablelist")}
      >
        click
      </button> */}
      <p>
        To View the userList<Link to="/Tablelist"> click here...</Link>
      </p>
      {/* </div> */}
    </>
  );
}
export default Welcome;
