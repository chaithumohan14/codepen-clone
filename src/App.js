import React from "react";
import Editor from "./Components/Editor";
import "./App.css";

function App() {
  if (localStorage.getItem("html") === "undefined") {
    console.log(localStorage.getItem("html"));
  }
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
