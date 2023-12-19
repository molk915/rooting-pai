import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdventCalendar from "./components/AdventCalendar/AdventCalendar";
import contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Me from "./components/Me/Me";
function App() {
  const [count, setCount] = useState(0);

  // return <AdventCalendar />;
  return (
    <>
      {" "}
      <header />;
      <Navbar />;
      <Main />;
      <footer />;
    </>
  );
}

export default App;
