import { useState } from "react";
import {useDispatch} from 'react-redux';
import actions from '../action';
function ToggleSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();
    // dark theme toggler
    const handleDarkModeToggle = () => {
      setIsDarkMode(!isDarkMode);
      dispatch(actions.toggledarkmode(!isDarkMode));
    };
    const bodyStyle = {
      backgroundColor: isDarkMode ? "#222" : "#fff",
      color: isDarkMode ? "#fff" : "#222",
    };

  return (
    <>
    <div className="toggler">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
        />
        <span className="slider round"></span>
      </label>

      <div className="content" style={bodyStyle}>
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      </div>
    </div>
    </>
  );
}

export default ToggleSwitch;
