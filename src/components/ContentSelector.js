import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ResumePage from '../pages/ResumePage';
import AboutPage from '../pages/AboutPage';

const ContentSelector = () => {
	const location = useLocation();
	return (
		<>
			{location.pathname === '/' ? (
				<HomePage style={{ height: '100%' }} />
			) : location.pathname === '/resume' ? (
				<ResumePage style={{ minHeight: '83vh' }} />
			) : location.pathname === '/about' ? (
				<AboutPage style={{ minHeight: '83vh' }} />
			) : (
				<div style={{ padding: '32px', fontSize: '32px' }}>
					Woops, 404 Page Not Found
				</div>
			)}
		</>
	);
};

export default ContentSelector;
