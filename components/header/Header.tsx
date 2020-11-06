import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.item}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
