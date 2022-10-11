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
			{/* placeholder div */}
			<div
				style={{
					marginLeft: "18px",
					width: "95%",
					height: "100%",
					backgroundColor: "#FFFFFF",
				}}
			></div>
			{/* insert an iframe to the webgl build */}
			{/* 
			<iframe 
				mozallowfullscreen="false"
				src={propswebGLLink}
				style="border:0px #000000 none;"
				name={propsgameName}
				scrolling="no"
				frameborder="0"
			></iframe>
			*/}
		</div>
	);
}

export default ArcadeScreen;