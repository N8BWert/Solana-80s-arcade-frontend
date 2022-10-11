import React from 'react';

function ArcadeScreen(props) {
	return (
		<div 
			style={{
				width: props.width * 1,
				height: props.height * 1,
				backgroundColor: props.backgroundColor,
			}}
		>
			{/* placeholder div */}
			{/* <div
				style={{
					margin: "25px",
					backgroundColor: "#FFFFFF",
				}}
			></div> */}
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