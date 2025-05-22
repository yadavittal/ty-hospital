import React from "react";
import styles from "./NewsFeed.module.scss";
import imgUrl  from "../../assets/jpg/newsImage.jpg";
import { newsItems } from "../../constants/newItem";
import BackArrow from "../../assets/icons/BackArrow.svg"

export interface NewsItem {
  date: string;
  description: string;
}
const newsItem: NewsItem[] = newsItems;

const NewsFeed: React.FC = () => {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <h2>News & Events</h2>
            <span>A template from Flowbase</span>
          </div>
          <div className={styles.linkCircle}>
               <img src={BackArrow} alt="backArrow image" />
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.imgSec}>
            <img
              src={imgUrl}
              alt="News Visual"
              className={styles.img}
            />
          </div>
          <div className={styles.infosec}>
            {newsItem.map((item, index) => (
              <div className={styles.newsItem} key={index}>
                <span className={styles.date}>{item.date}</span>
                <p>{item.description}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
