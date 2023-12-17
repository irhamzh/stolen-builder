import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colors from './colors';
import CharacterCard from './CharacterCard';
import MainButton from './MainButton';
import CharacterCardInterface from '../interfaces/character-card.interface';

interface Props {
	title: string;
	children: ReactNode[];
	width?: string;
	onAccept?: () => void;
	onEdit?: () => void;
	onRemove?: () => void;
	onCreateNew?: () => void;
	// Probably need to import all the character data here
}

const CharacterSelection: React.FC<Props> = ({
	title,
	children,
	width,
	onAccept,
	onEdit,
	onRemove,
	onCreateNew
}) => {
	const isTotalCharacterEven = children.length % 2 === 0;
	return (
		<Container
			style={{
				backgroundColor: '#211A19',
				border: '5px solid #40302B',
				position: 'relative',
				width: width || '45vw'
			}}
		>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<h2 className="my-3" style={{ color: colors.font.primary }}>
						{title.toUpperCase()}
					</h2>
				</Col>
			</Row>
			<Row
				className="p-2 mb-3 d-flex"
				style={{
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				{children}
				<Col className="my-2 justify-content-md-center d-flex">
					<CharacterCard onClick={onCreateNew} />
				</Col>
				{/* // For even amount of character */}
				{isTotalCharacterEven && (
					<Col className="my-2 justify-content-md-center d-flex">
						<div
							style={{
								width: '20rem',
								height: '11rem'
							}}
						/>
					</Col>
				)}
			</Row>
			{children.length > 0 && (
				<Row className="justify-content-md-center my-4">
					{typeof onRemove !== 'undefined' && (
						<Col md="auto">
							<MainButton variant="danger" onClick={onRemove}>
								REMOVE CHARACTER
							</MainButton>
						</Col>
					)}
					{typeof onEdit !== 'undefined' && (
						<Col md="auto">
							<MainButton variant="warning" onClick={onEdit}>
								EDIT CHARACTER
							</MainButton>
						</Col>
					)}
					{typeof onAccept !== 'undefined' && (
						<Col md="auto">
							<MainButton variant="success" onClick={onAccept}>
								ACCEPT CHARACTER
							</MainButton>
						</Col>
					)}
				</Row>
			)}
		</Container>
	);
};

export default CharacterSelection;
