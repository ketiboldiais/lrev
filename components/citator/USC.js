import React from "react";
import styles from "./citator.module.css";

const USC = ({title, section}) => {
  return (
		<cite className={styles.citator}>
      {title ? `${title} ` : ""}U.S.C. § {section}
    </cite>
  );
};

export default USC;
