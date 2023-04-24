import Loginform from "./Loginform";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavigation from "./WithNavigation";
import Tablelist from "./Tablelist";
import WithParams from "./WithParams";
import Header from "./Header";
import AuthenticateRoute from "./AuthenticateRoute";
import Footer from "./Footer";

function Todo() {
  const LoginformWithNavig = WithNavigation(Loginform);
  const WelcomeWithParams = WithParams(Welcome);
  const HeaderWithNavig = WithNavigation(Header);
  const TablelistWithNavig = WithNavigation(Tablelist);
  // const FooterWithNavig = WithNavigation(Footer);

  return (
    <div>
      <Router>
        <HeaderWithNavig />

        <Routes>
          <Route path="/login" element={<LoginformWithNavig />}></Route>

          <Route path="/" element={<LoginformWithNavig />}></Route>
          <Route
            path="/Welcome/:name"
            element={
              <AuthenticateRoute>
                <WelcomeWithParams />
              </AuthenticateRoute>
            }
          ></Route>
          <Route
            path="/Tablelist"
            element={
              <AuthenticateRoute>
                <TablelistWithNavig />
              </AuthenticateRoute>
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}
function Error() {
  return <div>Error 404 page not found</div>;
}
export default Todo;
