import Header from "../components/Header";
import Main from "./Main";
import styles from "../styles/equalizerpage.module.css";
import Footer from "./Footer";
import mainBgImg from "../assets/bg-main-desktop.png";

const Equalizer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${mainBgImg})` }}
      className={styles.equalizerPage}
    >
      <Header text="equalizer" />
      <Main />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Equalizer;
