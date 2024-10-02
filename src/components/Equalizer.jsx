import Header from "../components/Header";
import Main from "./Main";
import styles from "../styles/equalizerpage.module.css";
import Footer from "./Footer";

const Equalizer = () => {
  return (
    <div className={styles.equalizerPage}>
      <Header text="equalizer" />
      <Main />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Equalizer;
