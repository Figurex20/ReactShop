import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';
function NotFound() {
	return (
		<>
			<div className="container-error">
				<Link
					to="/"
					style={{ textDecoration: 'none', width: '25%', marginLeft: '38%' }}
				>
					<h1 className="container-error-link hover">Home</h1>
				</Link>
				<h1 className="container-error-h1">Error</h1>
				<h3 className="container-error-404">404</h3>
			</div>
		</>
	);
}

export { NotFound };
