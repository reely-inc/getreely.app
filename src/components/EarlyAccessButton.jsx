import React from 'react';

export default function EarlyAccessButton() {
	return (
		<button
			style={{
				backgroundColor: '#d75e91',
				color: '#060a13',
				border: 'none',
				padding: '8px 16px',
				borderRadius: '50px',
				cursor: 'pointer',
				fontSize: '0.9rem',
				fontWeight: 'bold',
				transition: 'background-color 0.3s ease',
			}}
			onClick={() => {
				window.open('https://groups.google.com/g/reely-beta-testers', '_blank');
			}}
			onMouseOver={(e) => (e.target.style.backgroundColor = '#f9c07d')}
			onMouseOut={(e) => (e.target.style.backgroundColor = '#d75e91')}
		>
			Get Early Access Now!
		</button>
	);
}
