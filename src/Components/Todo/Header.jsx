import React from "react";
import { Link } from "react-router-dom";
import Authentication from "./Authentication";
class Header extends React.Component {
  render() {
    let Loggedin = Authentication.isUserLoggedin();
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {Loggedin && (
                  <Link class="nav-link active" aria-current="page" to="/login">
                    Home
                  </Link>
                )}
              </li>
              <li class="nav-item">
                {Loggedin && (
                  <Link class="nav-link" to="/Welcome/:name">
                    Welcome page
                  </Link>
                )}
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Tablelist">
                  Tablelist
                </Link>
              </li>
              {/* <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tablelist
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
            <form class="d-flex">
              <li class="nav-item">
                {Loggedin && (
                  <Link
                    className=" navbar-dark bg-dark"
                    to="/login"
                    onClick={() => Authentication.removeUser()}
                  >
                    Logout
                  </Link>
                )}
              </li>

              {/* <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
 