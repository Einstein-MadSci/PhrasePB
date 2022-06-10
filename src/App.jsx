import React from "react";
import Header from "./components/header/Header";
import Divs from "./components/divs/Divs";
import Save from "./components/save/Save";

const App = () => {
  return (
    <>
      <Header />
      <Divs />
      {/* <p id="save-el">
        Saved Contacts: <Save />{" "}
      </p> */}
      <Save />
    </>
  );
};

export default App;
