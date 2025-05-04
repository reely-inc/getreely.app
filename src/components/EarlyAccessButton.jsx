import React, { useState } from 'react';
import getReely from '../assets/get-reely-app.png';

export default function EarlyAccessButton({ type = 'button' }) {
	const [showPlatformDialog, setShowPlatformDialog] = useState(false);

	const redirectToStore = (platform) => {
		if (platform === 'android') {
			// Redirect to Google Play Store for Android
			window.open('https://play.google.com/apps/testing/com.reelyinc.reely', '_blank');
		} else if (platform === 'ios') {
			// Redirect to TestFlight for iOS
			window.open('https://testflight.apple.com/join/X9S3H8sk', '_blank');
		}
		setShowPlatformDialog(false);
	};

	const handleClick = () => {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if (/android/i.test(userAgent)) {
			// Redirect to Google Play Store for Android
			window.open('https://play.google.com/apps/testing/com.reelyinc.reely', '_blank');
		} else if (/iPad|iPhone|iPod/.test(userAgent) && typeof window.MSStream === 'undefined') {
			// Redirect to TestFlight for iOS
			window.open('https://testflight.apple.com/join/X9S3H8sk', '_blank');
		} else {
			// Show platform selection dialog
			setShowPlatformDialog(true);
		}
	};

	// Platform selection dialog
	const PlatformDialog = () => (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			zIndex: 1001
		}}>
			<div style={{
				backgroundColor: '#060a13',
				padding: '20px',
				borderRadius: '10px',
				maxWidth: '90%',
				width: '400px',
				border: '2px solid #d75e91',
				boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
			}}>
				<h3 style={{ color: '#f9c07d', marginTop: 0 }}>Select Your Platform</h3>
				<p style={{ color: '#fff', marginBottom: '20px' }}>
					We couldn't automatically detect your device. Please select your platform to continue:
				</p>
				<div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '15px' }}>
					<button
						onClick={() => redirectToStore('android')}
						style={{
							backgroundColor: '#3ddc84', // Android green
							color: '#000',
							border: 'none',
							padding: '10px 20px',
							borderRadius: '50px',
							cursor: 'pointer',
							fontWeight: 'bold',
							width: '45%'
						}}
					>
						Android
					</button>
					<button
						onClick={() => redirectToStore('ios')}
						style={{
							backgroundColor: '#007aff', // iOS blue
							color: '#fff',
							border: 'none',
							padding: '10px 20px',
							borderRadius: '50px',
							cursor: 'pointer',
							fontWeight: 'bold',
							width: '45%'
						}}
					>
						iOS
					</button>
				</div>
				<button
					onClick={() => setShowPlatformDialog(false)}
					style={{
						backgroundColor: 'transparent',
						color: '#d75e91',
						border: '1px solid #d75e91',
						padding: '8px 16px',
						borderRadius: '50px',
						cursor: 'pointer',
						width: '100%'
					}}
				>
					Cancel
				</button>
			</div>
		</div>
	);

	if (type === 'image') {
		return (
			<>
				<img
					src={getReely.src} // Use the imported image path directly
					alt="Get Reely App"
					style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
					onClick={handleClick}
				/>
				{showPlatformDialog && <PlatformDialog />}
			</>
		);
	}

	return (
		<>
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
			{showPlatformDialog && <PlatformDialog />}
		</>
	);
}
