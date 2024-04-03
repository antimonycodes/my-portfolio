// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
import { FaSun, FaMoon } from "react-icons/fa";
import "./DarkMode.css";

const DarkMode = ({ onClick }) => {
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onClick={onClick}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        {/* <Sun />
        <Moon /> */}
        <FaSun className="sun" />
        <FaMoon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
