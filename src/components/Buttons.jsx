import { useRef } from "react";
import styles from "../styles/button.module.css";

const Buttons = ({ icon, btnText, textColor, btnColor, hoverColor }) => {
  const buttonEl = useRef(null);

  const handleOnMouseEnter = (e) => {
    buttonEl.current.style.backgroundColor = `${hoverColor}`;
  };

  const handleOnMouseLeave = () => {
    buttonEl.current.style.backgroundColor = `${btnColor}`;
  };

  return (
    <button
      className={styles.btnContainer}
      style={{ color: textColor, background: btnColor }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      ref={buttonEl}
    >
      <span>
        <img src={icon} alt={btnText} />
      </span>
      {btnText}
    </button>
  );
};
export default Buttons;
