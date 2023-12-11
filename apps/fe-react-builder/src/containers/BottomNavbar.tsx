import React, { useState } from 'react';
import colors from '../components/colors';
import { Link } from 'react-router-dom';
import StolenRealmLogo from '../assets/stolen-realm-logo.png';

const BottomNavbar = () => {
	const tabs = [
		{ name: 'Encyclopedia', href: '/encyclopedia' },
		{ name: 'Home', href: '/' },
		{ name: 'Calculator', href: '/calculator' }
	];

	const [selectedTab, setSelectedTab] = useState<string>(tabs[1].name);
	const [tabHover, setTabHover] = useState<any>();

	const baseStyle: React.CSSProperties = {
		backgroundColor: colors.brown.yellow,
		padding: '0px 10px 15px 10px',
		bottom: 0,
		width: '99%',
		zIndex: 100,
		position: 'fixed',
		display: 'flex',
		justifyContent: 'space-between',
		marginRight: '15px'
	};

	const copyrightStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'end',
		color: colors.white,
		fontSize: '14px'
	};

	const tabStyle: React.CSSProperties = {
		textDecoration: 'none',
		color: colors.white,
		fontWeight: 600,
		fontSize: '18px',
		height: '100%',
		width: '100%'
	};

	const linkTabStyle = (
		tabName: string,
		index: number
	): React.CSSProperties => ({
		cursor: 'pointer',
		padding: '10px',
		borderTop: selectedTab === tabName ? `10px solid #4A57FF` : 'none',
		marginLeft: '10px',
		backgroundColor: tabHover === index ? colors.brown.lighter : '',
		height: '75%'
	});

	return (
		<div
			style={{
				...baseStyle
			}}
		>
			<img src={StolenRealmLogo} width="90px" height="70px" alt="Stolen Logo" />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{tabs.map((tab, index) => (
					<Link to={tab.href} style={tabStyle}>
						<div
							key={tab.name}
							style={linkTabStyle(tab.name, index)}
							onClick={() => setSelectedTab(tab.name)}
							onMouseEnter={() => setTabHover(index)}
							onMouseLeave={() => setTabHover(undefined)}
						>
							{tab.name}
						</div>
					</Link>
				))}
			</div>

			<div style={copyrightStyle}>
				<span>
					This is a fan project. <br />
					All rights belongs to Burst2Flame Studio
				</span>
			</div>
		</div>
	);
};

export default BottomNavbar;
