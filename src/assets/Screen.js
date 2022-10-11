import React from 'react';

import Arrow from './Arrow';
import ArcadeMachine from './ArcadeMachine';

import "./Screen.css";

function Screen(props) {
	return (
		<div className="screen-container">
			<Arrow isRight={false} />
			<ArcadeMachine
				screenWidth={props.screenWidth === null ? "200px" : props.screenWidth}
				screenHeight={props.screenHeight}
				numPlayers={props.numPlayers}
				buttonsPerPlayer={props.buttonsPerPlayer}
				webGLLink={props.webGLLink}
				gameTitleDisplayLink={props.gameTitleDisplayLink}
				gameName={props.gameName}
				backgroundColor={props.backgroundColor}
			/>
			<Arrow isRight={true} />
		</div>
	);
}

export default Screen;