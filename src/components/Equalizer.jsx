import Header from "../components/Header";
import Main from "./Main";
import styles from "../styles/equalizerpage.module.css";
import Footer from "./Footer";
import mainBgImg from "../assets/bg-main-desktop.png";
import bgPatternOneImg from "../assets/bg-pattern-1.svg";

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
      <div className={styles.bgPatternOne}>
        <img
          src={bgPatternOneImg}
          alt="abstract pattern to show in life top right of the website"
        />
      </div>
    </div>
  );
};

export default Equalizer;
