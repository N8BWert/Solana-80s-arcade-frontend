import React from 'react';

function ArcadeScreen(props) {
	return (
		<div 
			style={{
				width: "700px",
				height: "700px",
				backgroundColor: props.backgroundColor,
			}}
		>
			{/* insert an iframe to the webgl build */}
			<iframe 
				mozallowfullscreen="false"
				src={props.webGLLink}
				style={{
					marginLeft: "17px",
					width: "95%",
					height: "100%",
				}}
				title={props.gameName}
				scrolling="no"
				frameborder="0"
			></iframe>
		</div>
	);
}

export default ArcadeScreen;