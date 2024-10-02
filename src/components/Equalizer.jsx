import Header from "../components/Header";
import Main from "./Main";
import styles from "../styles/equalizerpage.module.css";

const Equalizer = () => {
  return (
    <div className={styles.equalizerPage}>
      <Header text="equalizer" />
      <Main />
    </div>
  );
};

export default Equalizer;
