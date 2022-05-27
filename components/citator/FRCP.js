import React from "react";
import styles from "./citator.module.css";

export default function FRCP({section}) {
  return (
    <cite className={styles.citator}>
      <span className={styles.caps}>Fed. R. Civ. P.</span> {section}
    </cite>
  );
}
