import React from 'react';
import getReely from '../assets/get-reely-app.png';

export default function EarlyAccessButton({ type = 'button' }) {
	const handleClick = () => {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if (/android/i.test(userAgent)) {
			// Redirect to Google Play Store for Android
			window.open('https://play.google.com/apps/testing/com.reelyinc.reely', '_blank');
		} else if (/iPad|iPhone|iPod/.test(userAgent) && typeof window.MSStream === 'undefined') {
			// Redirect to TestFlight for iOS
			window.open('https://testflight.apple.com/join/X9S3H8sk', '_blank');
		} else {
			// Inform users on unsupported platforms
			alert('Please visit this website from your mobile device to access the app.');
		}
	};

	if (type === 'image') {
		return (
			<img
				src={getReely.src} // Use the imported image path directly
				alt="Get Reely App"
				style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
				onClick={handleClick}
			/>
		);
	}

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
			onClick={handleClick}
			onMouseOver={(e) => (e.target.style.backgroundColor = '#f9c07d')}
			onMouseOut={(e) => (e.target.style.backgroundColor = '#d75e91')}
		>
			Get Early Access Now!
		</button>
	);
}
