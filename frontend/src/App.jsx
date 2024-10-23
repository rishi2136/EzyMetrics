import React, { useState } from "react";
import { Outlet} from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";


const App = () => {
  let [email, setEmail] = useState(null);

  return (
    <>
      <Navber email={email} setEmail={setEmail}/>
      <Outlet context={email}/>
    </>
  );
};

export default App;
