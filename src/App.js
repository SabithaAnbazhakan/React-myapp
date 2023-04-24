import "./App.css";
// import React, { useState, useEffect } from "react";
//import FirstComponent from "./Components/FirstComponent";
//import SecondComponent from "./Components/SecondComponent";
//import { ThirdComponent } from "./Components/SecondComponent";
//import Counter from "./Components/Counter/Counter";
// import AddComponent from "./Components/Counter/Counter";
//import Uncontrolled from "./Components/Uncontrolled";
import Controlled from "./Components/Controlled";
import List from "./List";
import Mounting from "./Components/Mounting";
import Updating from "./Components/Counter/Updating";
import Unmounting from "./Components/Counter/Unmounting";
import Listadd from "./Listadd/Listadd";
import Listnew from "./Components/Counter/Listnew";
import Todo from "./Components/Todo/Todo";
import Namelist from "./Components/Namelist";
// import Home from "./Router/Home";
// import Login from "./Router/Login";
function App() {
  return (
    <div className="App">
      {/* <h2>Header</h2> */}
      {/* <AddComponent></AddComponent> */}

      {/* <Uncontrolled></Uncontrolled> */}
      {/* <Controlled></Controlled> */}
      {/* <List></List> */}
      {/* <Mounting favcolor="Black"></Mounting> */}
      {/* <Updating favcolor="red"></Updating> */}
      {/* <Unmounting></Unmounting> */}
      {/* <Listadd></Listadd> */}
      {/* <Listnew></Listnew> */}
      {/* <NewComponent></NewComponent> */}
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Todo></Todo> */}
      <Namelist></Namelist>
    </div>
  );
}
// function NewComponent() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(() => count + 1);
//     }, 1000);
//   });

//   return (
//     <>
//       {/* <div>count is {count}</div> */}
//       {/* <button onClick={() => setCount(() => count + 1)}>change</button> */}
//     </>
//   );
// }
export default App;
