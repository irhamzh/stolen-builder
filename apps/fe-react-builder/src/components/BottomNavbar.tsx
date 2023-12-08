import React, { useState } from 'react';
import colors from './colors';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
  const tabs = [
    {name: "Encyclopedia", href: "/encyclopedia"},
    {name: "Home", href: "/"},
    {name: "Calculator", href: "/calculator"},
  ]

  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);
  const [tabHover, setTabHover] = useState<any>();

  const baseStyle = { backgroundColor: colors.brown.yellow, padding: '0px 10px 15px 10px', bottom: 0, width: '100%', zIndex: 100, }

  return (
    <div style={{...baseStyle, position: "fixed" }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {tabs.map((tab, index) => (
          <Link to={tab.href} style={{textDecoration: "none", color: colors.white, fontWeight: 600}}>
            <div
              key={tab.name}
              style={{
                cursor: 'pointer',
                padding: '10px',
                borderTop: selectedTab === tab.name ? `5px solid #4A57FF` : 'none',
                marginLeft: "10px",
                backgroundColor: tabHover === index ? colors.brown.lighter : "",
              }}
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
