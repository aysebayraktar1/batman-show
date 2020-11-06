import Link from "next/link";
import React from "react";
import styles from "./list.module.scss";

const List = ({ shows = [] }) => {
  return (
    <>
      <div className={styles.title}>
        <h2>Batman TV Shows</h2>
      </div>
      <div className={styles.container}>
        {shows.map((s) => {
          return (
            <div className={styles.list}>
              <Link href={`/detail/${s.show.id}`}>
                <a>{s.show.name}</a>
              </Link>
            </div>
          );
        })}{" "}
      </div>
    </>
  );
};
export default List;
