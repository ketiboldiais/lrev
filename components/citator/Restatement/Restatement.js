import React from "react";
import styles from "../citator.module.css";

function Restatement({ law, sect, edition, year = 1999, notes }) {
	const amlawinst = () => <span className={styles.caps}>Am. L. Inst.</span>;
	
	return (
		<cite className={styles.citator}>
			<span className={styles.caps}>
				Restatement{edition ? ` (${edition})` : ""} of {law}
				{sect ? `§ ${sect}` : ""}
				{year ? ` (Am. L. Inst. ${year})` : ""}
				{notes ? `(${notes})` : ""}
			</span>
		</cite>
	);
}

export default Restatement;
