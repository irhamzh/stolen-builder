import React, { ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import colors from './colors';

interface ButtonProps {
	variant: 'success' | 'danger' | 'warning';
	children: ReactNode;
	onClick?: () => void; // Optional click handler
}

const MainButton: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
	return (
		<Button variant={variant} onClick={onClick} size="sm">
			{children}
		</Button>
	);
};

export default MainButton;
