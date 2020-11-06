import React from "react";
import styles from "./card.module.scss";

const Card = ({ show }) => {
  return (
    <div className={styles.description}>
      <h3>{show.name}</h3>
      {show.genres?.map((o) => (
        <li className={styles.genre}>{o}</li>
      ))}
      <div dangerouslySetInnerHTML={{ __html: `${show.summary}` }}></div>
      <div>
        <a target="_blank" href={`${show.url}`}>
          MORE DETAIL
        </a>
      </div>
    </div>
  );
};
export default Card;
