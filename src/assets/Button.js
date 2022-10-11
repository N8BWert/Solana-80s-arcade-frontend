import React from 'react';

function Button(props) {
	return (
		<div
			style={{
				height: props.height,
				width: props.width,
				backgroundColor: 'red',
				borderRadius: "50%",
				display: "inline-block",
			}}
		>
		</div>
	);
}

export default Button;