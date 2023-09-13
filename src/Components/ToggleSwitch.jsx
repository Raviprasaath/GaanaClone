import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../action";
function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const dispatch = useDispatch();
  // dark theme toggler
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(actions.toggledarkmode(!isDarkMode));
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
      </div>
    </>
  );
}

export default ToggleSwitch;
