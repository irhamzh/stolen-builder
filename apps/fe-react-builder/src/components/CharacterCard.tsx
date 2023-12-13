import React from 'react';
import { Card } from 'react-bootstrap';
import colors from './colors';
import PlusCharacter from '../assets/plus-character.png';

interface CardProps {
	characterData?: any; //create interface
	isCreateNew?: boolean;
}

const CharacterCard: React.FC<CardProps> = ({
	characterData,
	isCreateNew = false
}) => {
	return (
		<Card
			style={{
				backgroundColor: colors.purple,
				border: `2px solid ${colors.secondary}`,
				width: '20rem',
				height: '10rem'
			}}
		>
			<Card.Body>
				{isCreateNew ? (
					<div
						style={{
							textAlign: 'center',
							verticalAlign: 'center'
						}}
						className="mt-3"
					>
						<img
							src={PlusCharacter}
							width="60px"
							height="60px"
							alt="Stolen Logo"
						/>
						<h3 style={{ color: colors.font.primary }}>Create New</h3>
					</div>
				) : (
					<>
						<Card.Title>{characterData?.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{characterData?.buildName}
						</Card.Subtitle>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</>
				)}
			</Card.Body>
		</Card>
	);
};

export default CharacterCard;
