import styles from "../styles/footer.module.css";
import fbIcon from "../assets/icon-facebook.svg";
import insIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerTitle}>equalizer</p>
      <div className={styles.aboutWebsite}>
        <p>All rights reserved © Equalizer {currentYear}</p>
        <p>Have any problems? Contact us via social media or </p>
        <address>
          email us at <a href="equalizer@example.com">equalizer@example.com</a>{" "}
        </address>
      </div>
      <div className={styles.iconContainer}>
        <span>
          <img src={fbIcon} alt="facebook icon" />
        </span>
        <span>
          <img className={styles.insIcon} src={insIcon} alt="instragram icon" />
        </span>
        <span>
          <img
            className={styles.twitterIcon}
            src={twitterIcon}
            alt="twitter icon"
          />
        </span>
      </div>
    </div>
  );
};
export default Footer;
