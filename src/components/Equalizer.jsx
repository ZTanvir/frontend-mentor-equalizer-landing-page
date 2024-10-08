import Header from "../components/Header";
import Main from "./Main";
import styles from "../styles/equalizerpage.module.css";
import Footer from "./Footer";
import bgPatternOneImg from "../assets/bg-pattern-1.svg";

const Equalizer = () => {
  return (
    <div className={styles.equalizerPage}>
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
