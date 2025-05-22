import React, { useEffect } from "react";
import styles from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import LogoIcon from "../../assets/icons/Logo.svg";
import Qrcode from "../../assets/icons/Qrcode.png";
import PlantIcon from "../../assets/icons/Plant.png";
import { SlSocialFacebook } from "react-icons/sl";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const Footer: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    if (!lang || lang === "en") {
      document.cookie =
        "googtrans=; path=/; domain=" +
        window.location.hostname +
        "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie =
        "googtrans_current=; path=/; domain=" +
        window.location.hostname +
        "; expires=Thu, 01 Jan 1970 00:00:00 GMT"; // ADDED: Clear additional cookie
      window.location.reload();
      return;
    }
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${window.location.hostname}`;
    window.location.reload();
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.leftSection}>
          <div className={styles.logoSection}>
            <img
              src={LogoIcon}
              alt="Multi-speciality Hospitals"
              className={styles.logo}
            />
            <div className={styles.logoTitle}>
              <p className={styles.firstHeading}>Multi-speciality</p>
              <p className={styles.secondHeading}>Hospitals</p>
            </div>
          </div>
          <div className={styles.locations}>
            <div className={styles.qrBlock}>
              <img src={Qrcode} alt="Bengaluru QR" />
              <div>
                <strong>Bengaluru</strong>
                <p>
                  92/9, 80 Feet Rd,
                  <br /> Multi-speciality,
                  <br /> Bengaluru - 560085
                </p>
              </div>
            </div>
            <div className={styles.qrBlock}>
              <img src={Qrcode} alt="Dindigul QR" />
              <div>
                <strong>Bengaluru</strong>
                <p>
                  92/9, 3rd floor,
                  <br /> 80 Feet Rd,
                  <br /> Bengaluru - 560085
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.middleSection}>
            <div>
              <h4>COMPANY</h4>
              <ul>
                <li>Lorem Content</li>
                <li>Lorem Content</li>
                <li>Lorem Content</li>
                <li>Lorem Content</li>
              </ul>
            </div>
            <div>
              <h4>SERVICES</h4>
              <ul>
                <li>Lorem Content</li>
                <li>Lorem Content</li>
                <li>Lorem Content</li>
                <li>Lorem Content</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.socialIcons}>
              <SlSocialFacebook />
              <CiLinkedin />
              <CiTwitter />
              <FaInstagram />
            </div>
            <div className={styles.languageSelector}>
              <IoMdGlobe />
              <select
                onChange={changeLanguage}
                defaultValue=""
                aria-label="Select Language"
              >
                <option value="" disabled hidden>
                  Select Language
                </option>
                <option value="en">English - En</option>
                <option value="es">Spanish - Es</option>
                <option value="fr">French - Fr</option>
                <option value="hi">Hindi - Hi</option>
                <option value="zh-CN">Chinese (Simplified) - Zh</option>
                <option value="kn">Kannada - Kn</option>
              </select>
            </div>
            <a href="mailto:info@multispeciality.org" className={styles.email}>
              info@multispeciality.org
            </a>
            <img src={PlantIcon} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;