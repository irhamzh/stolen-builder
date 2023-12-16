import React, { ReactNode } from 'react';

interface ButtonProps {
  color?: string;
  size?: string;
  children?: ReactNode;
}

const MainButton: React.FC<ButtonProps> = ({ color = '#000', size = '1px', children }) => {
  return (
    <div style={{ position: 'relative' }}>
      {children && <div style={{ bottom: '100%' }} >{children}</div>}
      <div
        style={{
          backgroundColor: color,
          height: size,
          width: '100%',
          margin: '10px 0',
        }}
      />
    </div>
  );
};

export default MainButton;
