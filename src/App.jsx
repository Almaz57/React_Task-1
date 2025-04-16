import logo from './logo.svg';
import './index.css';

export const App = () => {
	const curDateY = new Date().getFullYear(); // императивный стиль с получением даты
	return (
		// декларативный стиль с получением разметки
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<h1>{curDateY}</h1>
			</header>
		</div>
	);
};
