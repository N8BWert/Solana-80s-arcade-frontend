import React from 'react';

import './Arrow.css';

function Arrow(props) {
	if (props.right) {
		return (
			<div>
				<img src="https://static.vecteezy.com/system/resources/thumbnails/008/844/878/small/arrow-icon-design-free-png.png" alt="right arrow" className="arrow"/>
			</div>
		);
	} else {
		return (
			<div>
				<img src="https://static.vecteezy.com/system/resources/thumbnails/008/844/878/small/arrow-icon-design-free-png.png" alt="left arrow" className="arrow"/>
			</div>
		);
	}
}

export default Arrow;