import React from 'react';

import ButtonJoystick from './ButtonJoystick';

function UnderScreen(props) {
	switch (props.numPlayers) {
		case 1:
			if (props.buttonsPerPlayer === 2) {
				return (
					<div className="arcade-control-holder" style={{backgroundColor: props.backgroundColor}}>
						<ButtonJoystick buttonsPerPlayer={2} />
					</div>
				);
			} else {
				return (
					<div className="arcade-control-holder" style={{backgroundColor: props.backgroundColor}}>
						<ButtonJoystick buttonsPerPlayer={4} />
					</div>
				);
			}
		case 2:
			if (props.buttonsPerPlayer === 2) {
				return (
					<div className="arcade-control-holder" style={{backgroundColor: props.backgroundColor}}>
						<ButtonJoystick buttonsPerPlayer={2} />
						<ButtonJoystick buttonsPerPlayer={2} />
					</div>
				);
			} else {
				return (
					<div className="arcade-control-holder" style={{backgroundColor: props.backgroundColor}}>
						<ButtonJoystick buttonsPerPlayer={4} />
						<ButtonJoystick buttonsPerPlayer={4} />
					</div>
				);
			}
		case 3:
			if (props.buttonsPerPlayer === 2) {
				return (
					<div className="arcade-control-holder" style={{backgroundColor: props.backgroundColor}}>
						<ButtonJoystick buttonsPerPlayer={2} />
						<ButtonJoystick buttonsPerPlayer={2} />
						<ButtonJoystick buttonsPerPlayer={2} />
					</div>
				);
			} else {
				return (
					<div className="arcade-control-holder" style={{backgroundColor: props.backgroundColor}}>
						<ButtonJoystick buttonsPerPlayer={4} />
						<ButtonJoystick buttonsPerPlayer={4} />
						<ButtonJoystick buttonsPerPlayer={4} />
					</div>
				);
			}
		default:
			if (props.buttonsPerPlayer === 2) {
				return (
					<div className="arcade-control-holder" style={{backgroundColor: props.backgroundColor}}>
						<ButtonJoystick buttonsPerPlayer={2} />
						<ButtonJoystick buttonsPerPlayer={2} />
						<ButtonJoystick buttonsPerPlayer={2} />
						<ButtonJoystick buttonsPerPlayer={2} />
					</div>
				);
			} else {
				return (
					<div className="arcade-control-holder" style={{backgroundColor: props.backgroundColor}}>
						<ButtonJoystick buttonsPerPlayer={4} />
						<ButtonJoystick buttonsPerPlayer={4} />
						<ButtonJoystick buttonsPerPlayer={4} />
						<ButtonJoystick buttonsPerPlayer={4} />
					</div>
				);
			}
	}
}

export default UnderScreen;