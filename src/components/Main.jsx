import PriceCard from "./PriceCard";
import demoAppImg from "../assets/illustration-app.png";
import demoAndPriceBgImg from "../assets/bg-pattern-2.svg";
import styles from "../styles/main.module.css";

const Main = () => {
  return (
    <main className={styles.mainSectionContainer}>
      <section className={styles.pageDescriptions}>
        <h2>We make your music sound extraordinary.</h2>
        <p>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </section>
      <div
        style={{ backgroundImage: `url(${demoAndPriceBgImg})` }}
        className={styles.demoAndPriceContainer}
      >
        {/* <img
          src={demoAppImg}
          alt="equalizer app interface inside of a mobile phone"
        /> */}
        {/* <PriceCard /> */}
      </div>
    </main>
  );
};

export default Main;
