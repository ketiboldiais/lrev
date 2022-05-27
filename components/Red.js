import React from 'react'
import colors from "../styles/text.module.css"

const Red = ({ text }) => {
	return (
		<span className={colors.red}>{text}</span>
	)
}

export default Red