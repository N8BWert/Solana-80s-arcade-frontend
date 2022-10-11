import React from 'react';

function GameTitleDisplay(props) {
	return (
		<div>
			<img src={props.img} alt={props.name}/>
		</div>
	);
}

export default GameTitleDisplay;