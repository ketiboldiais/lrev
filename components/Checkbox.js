import React from "react";

const Checkbox = ({ children }) => {
	return (
		<span className="checkbox">
			<label>
				<input type={"checkbox"} />
				<span></span>
				{children}
			</label>
		</span>
	);
};

export default Checkbox;
