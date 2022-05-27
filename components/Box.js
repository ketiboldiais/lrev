import React from 'react'
import styles from "../styles/Box.module.css"

const Box = ({children}) => {
	return (
		<div className={styles.questionContainer}>
			{children}
		</div>
	)
}

export default Box