import logo from './assets/react.svg';
import './index.css';
import { createElement } from 'react';

export const App = () => {
	const curDateY = new Date().getFullYear(); // императивный стиль везде
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { className: 'App-logo', src: logo, alt: 'logo' }),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload 2.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('h1', null, curDateY),
		),
	);
};
