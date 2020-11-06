import React from "react";
import Card from "../card/Card";
import styles from "./detail.module.scss";

const Detail = ({ show }) => {
  const image = show.image;

  return (
    <div className={styles.detail}>
      {image == null ? (
        <img src="http://via.placeholder.com/280x393" />
      ) : (
        <img src={show.image.medium} />
      )}
      <Card show={show} />
    </div>
  );
};
export default Detail;
