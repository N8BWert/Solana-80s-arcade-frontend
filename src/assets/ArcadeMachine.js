import React from 'react';
import GameTitleDisplay from './GameTitleDisplay';
import ArcadeScreen from './ArcadeScreen';
import UnderScreen from './UnderScreen';

function ArcadeMachine(props) {
	return (
		<div className="arcade-container">
			<GameTitleDisplay
				backgroundColor={props.backgroundColor}
				img={props.gameTitleDisplayLink}
				name={props.gameName} 
			/>
			<ArcadeScreen 
				backgroundColor={props.backgroundColor}
				webGLLink={props.webGLLink}
				width={props.screenWidht}
				height={props.screenHeight}
				gameName={props.gameName}
			/>
			<UnderScreen 
				backgroundColor={props.backgroundColor}
				numPlayers={props.numPlayers}
				buttonsPerPlayer={props.buttonsPerPlayer}
			/>
		</div>
	);
}

export default ArcadeMachine;