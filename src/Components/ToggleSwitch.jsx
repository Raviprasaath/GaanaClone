import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import actions from "../action";
import { useSelector } from "react-redux";

function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const dispatch = useDispatch();
  const checkbox = useRef();

  const darkMode = useSelector((state) => state.usersData.darkMode);

  // dark theme toggler
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // dispatch(actions.toggledarkmode(isDarkMode));
    dispatch(actions.toggledarkmode(!darkMode));
    
  };


  return (
    <>
      <div className="toggler">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
            ref={checkbox}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export default ToggleSwitch;
