class Authentication {
  setLoggedUser(username) {
    sessionStorage.setItem("authenticateuser", username);
  }
  getLoggedUser() {
    let username = sessionStorage.getItem("authenticateuser");
    return username;
  }

  isUserLoggedin() {
    let username = this.getLoggedUser();
    if (username) {
      return true;
    } else {
      return false;
    }
  }
  removeUser() {
    sessionStorage.removeItem("authenticateuser");
  }
}

export default new Authentication();
