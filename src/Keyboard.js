import Spline from '@splinetool/react-spline';
import React, { useRef } from 'react';

export default function Keyboard({setContent}) {
	const keyboard = useRef(null);

	function onLoad(spline) {
		keyboard.current = spline;
		console.log(keyboard.current);
	}

	function onMouseDown(e) {
		console.log("click", e.target);

		switch (e.target.name) {
			case "home":
				setContent('home');
				break;
			
			case "about-me":
				setContent('about-me');
				break;

			case "projects":
				setContent('projects');
				break;

			case "github":
				window.open("https://github.com/oneaisyah", "_blank");
				break;

			case "linkedin":
				window.open("https://www.linkedin.com/in/wan-aisyah/", "_blank");
				break;
			case "email":
				window.open("mailto:aisyah_wan@mymail.sutd.edu.sg", "_blank");
				break;
			default:
				break;
		}
	}

	return (
		<Spline
			scene="https://prod.spline.design/IXiQRCk2nAHSlarr/scene.splinecode"
			onLoad={onLoad}
			onSplineMouseDown={onMouseDown}
			style={{ width: '100%', height: '100%' }}
		/>
	);
}