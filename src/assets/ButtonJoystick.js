import React from 'react';
import Joystick from './Joystick';
import Buttons from './Buttons';

function ButtonJoystick(props) {
	return (
		<div className="button-joystick-container">
			<Joystick />
			<Buttons buttonsPerPlayer={props.buttonsPerPlayer} />
		</div>
	);
}

export default ButtonJoystick;