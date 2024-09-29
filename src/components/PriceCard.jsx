import styles from "../styles/productcard.module.css";
import Buttons from "../components/Buttons";

import iosIcon from "../assets/icon-apple.svg";
import androidIcon from "../assets/icon-android.svg";

const PriceCard = ({}) => {
  return (
    <section className={styles.priceCardContainer}>
      <h2 className={styles.priceCardTitle}>Premium EQ</h2>
      <p className={styles.priceCardDescriptions}>
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <p className={styles.subscriptionCost}>
        <span className={styles.productPrice}>$4</span>
        <span>/month</span>
      </p>
      <div className={styles.buttonGroup}>
        <Buttons
          icon={iosIcon}
          btnText="ios Downloads"
          textColor="#FFFFFF"
          btnColor="#191826"
          hoverColor="#66E2DC"
        />
        <Buttons
          icon={androidIcon}
          btnText="Android Downloads"
          textColor="#191826"
          btnColor="#FCFAF9 "
          hoverColor="#FFB964"
        />
      </div>
    </section>
  );
};
export default PriceCard;
