import "./main.style.css";

import { NewResource } from "../components/newResource/NewResource";
import { Navbar } from "../components/navbar/Navbar";
import { MyResources } from "../components/myResources/MyResources";
import React from "react";

export function Main() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    console.log("RENDERIZANDO MAIN! CAMBIO EN IS LOGGED IN ?");
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Resourcify App</h1>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <NewResource isLoggedIn={isLoggedIn} />
      <div>
        <MyResources isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}
