import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colors from './colors';
import CharacterCard from './CharacterCard';

interface Props {
	title: string;
	children?: ReactNode;
	width?: string;
}

const CharacterSelection: React.FC<Props> = ({ title, children, width }) => {
	return (
		<Container
			style={{
				backgroundColor: '#211A19',
				border: '5px solid #40302B',
				position: 'relative',
				width: width || '40vw'
			}}
		>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<h3 className="my-3" style={{ color: colors.font.primary }}>
						{title.toUpperCase()}
					</h3>
				</Col>
			</Row>
			<Row
				className="justify-content-md-center p-2 mb-3"
				style={{ alignItems: 'center', marginLeft: '5px' }}
			>
				{children}
				<Col className="my-2">
					<CharacterCard isCreateNew />
				</Col>
			</Row>
		</Container>
	);
};

export default CharacterSelection;
