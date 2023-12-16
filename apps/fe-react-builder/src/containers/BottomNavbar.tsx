import React, { useState } from 'react';
import colors from '../components/colors';
import { Link } from 'react-router-dom';
import StolenRealmLogo from '../assets/stolen-realm-logo.png';

const BottomNavbar = () => {
	const tabs = [
		{ name: 'Home', href: '/' },
		{ name: 'Builder', href:'/builder'},
		{ name: 'Calculator', href: '/calculator' },
		{ name: 'Encyclopedia', href: '/encyclopedia' }
	];

	const [selectedTab, setSelectedTab] = useState<string>(tabs[1].name);
	const [tabHover, setTabHover] = useState<any>();

	const baseStyle: React.CSSProperties = {
		backgroundColor: colors.brown.yellow,
		padding: '0px 10px 15px 10px',
		bottom: 0,
		width: '100%',
		zIndex: 100,
		position: 'fixed',
		display: 'flex',
		justifyContent: 'space-between',
		marginRight: '15px'
	};

	const copyrightStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'start',
		fontSize: '12px'
	};

	const tabStyle: React.CSSProperties = {
		textDecoration: 'none',
		color: colors.white,
		fontWeight: 600,
		fontSize: '20px',
		height: '100%',
		marginLeft: 'px'
	};

	const linkTabStyle = (
		tabName: string,
		index: number
	): React.CSSProperties => ({
		cursor: 'pointer',
		padding: '10px',
		borderTop:
			selectedTab === tabName ? `10px solid ${colors.blue.primary}` : 'none',
		backgroundColor: tabHover === index ? colors.brown.lighter : '',
		height: '100%'
	});

	return (
		<div
			style={{
				...baseStyle
			}}
		>
			<div style={copyrightStyle} className="p-1">
				<img
					src={StolenRealmLogo}
					width="110px"
					height="80px"
					alt="Stolen Logo"
				/>
				<span style={{ marginLeft: '10px', marginTop: '5px' }}>
					This is a fan project. <br />
					All rights belongs to Burst2Flame Studio
				</span>
			</div>

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
		</div>
	);
};

export default BottomNavbar;
