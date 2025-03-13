import React, { useEffect } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import Home from './Sections/Home';
import AboutMe from './Sections/AboutMe';
import Projects from './Sections/Projects/Projects';

function App() {
	const [content, setContent] = React.useState('home');

	useEffect(() => {
		console.log(content);
	}, [content]);

	return (
		<div className="App">
			<Keyboard setContent={setContent}/>
			<div className="content">
				{content === 'home' && <Home />}
				{content === 'about-me' && <AboutMe />}
				{content === 'projects' && <Projects />}
			</div>
		</div>
	);
}

export default App;
