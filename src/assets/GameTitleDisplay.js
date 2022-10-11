import React from 'react';

function GameTitleDisplay(props) {
	return (
		<div style={{
				backgroundColor: props.backgroundColor,
				height: "100px",
				width: "700px"}}
		>
			<img src={props.img} alt={props.name}/>
		</div>
	);
}

export default GameTitleDisplay;