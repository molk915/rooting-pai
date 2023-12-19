import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Contact from "../Contact/Contact";
import Me from "../Me/Me";
import Preferences from "../Preferences/Preferences";
import Navbar from "../Navbar/Navbar";
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/me" element={<Me />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </main>
  );
};

export default Main;
