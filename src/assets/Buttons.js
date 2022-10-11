import React from 'react';
import './Buttons.css';

function Buttons(props) {
	if (props.buttonsPerPlayer === 2) {
		return (
			<div className="button-container">
				<div className="two-button">
					<img src="http://atlas-content-cdn.pixelsquid.com/stock-images/yellow-button-panic-XoJ0AM3-600.jpg" alt="arcade button" className="button"/>
				</div>
				<div className="two-button">
					<img src="http://atlas-content-cdn.pixelsquid.com/stock-images/yellow-button-panic-XoJ0AM3-600.jpg" alt="arcade button" className="button"/>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div className="button-container">
					<div className="four-button">
						<img src="http://atlas-content-cdn.pixelsquid.com/stock-images/yellow-button-panic-XoJ0AM3-600.jpg" alt="arcade button" className="button"/>
					</div>
					<div className="four-button-spacer"></div>
					<div className="four-button">
						<img src="http://atlas-content-cdn.pixelsquid.com/stock-images/yellow-button-panic-XoJ0AM3-600.jpg" alt="arcade button" className="button"/>
					</div>
					<div className="four-button-spacer"></div>
				</div>
				<div className="button-container">
					<div className="four-button-spacer"></div>
					<div className="four-button">
						<img src="http://atlas-content-cdn.pixelsquid.com/stock-images/yellow-button-panic-XoJ0AM3-600.jpg" alt="arcade button" className="button"/>
					</div>
					<div className="four-button-space"></div>
					<div className="four-button">
						<img src="http://atlas-content-cdn.pixelsquid.com/stock-images/yellow-button-panic-XoJ0AM3-600.jpg" alt="arcade button" className="button"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Buttons;