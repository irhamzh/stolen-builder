import React, { useState } from 'react';
import colors from '../components/colors';
import { Link } from 'react-router-dom';
import StolenRealmLogo from '../assets/stolen-realm-logo.png';

const BottomNavbar = () => {
	const tabs = [
		{ name: 'Builder', href:'/builder'},
		{ name: 'Encyclopedia', href: '/encyclopedia' },
		{ name: 'Calculator', href: '/calculator' },
		{ name: 'Home', href: '/' },
	];

	const [selectedTab, setSelectedTab] = useState<string>(tabs[2].name);
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
		textAlign: 'end',
		fontSize: '12px',
	};

	const tabStyle: React.CSSProperties = {
		textDecoration: 'none',
		color: colors.white,
		fontWeight: 600,
		fontSize: '18px',
		height: '100%',
		marginLeft: '10px'
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
      <div style={{display: 'flex'}}>
        <img
					src={StolenRealmLogo}
					width="100px"
					height="70px"
					alt="Stolen Logo"
				/>
        <div
          className='d-flex justify-content-center align-center'
          style={{marginLeft: '1vw'}}
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
      <div style={copyrightStyle} className="p-1">
				<span style={{ marginRight: '5x', marginTop: '5px' }}>
					This is a fan project. <br />
					All rights belongs to Burst2Flame Studio
				</span>
			</div>
		</div>
	);
};

export default BottomNavbar;
