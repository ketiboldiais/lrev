import React from "react";
import styles from "../citator.module.css";

const UCC = ({ sect, text="" }) => {
	return (
		<span>
			<cite className={styles.citator}>
				U.C.C.{sect ? ` § ${sect}` : ` ${text}`}
			</cite>
		</span>
	);
};

export default UCC;
