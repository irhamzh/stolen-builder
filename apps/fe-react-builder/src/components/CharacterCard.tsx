import React from 'react';
import { Card } from 'react-bootstrap';
import colors from './colors';
import PlusCharacter from '../assets/plus-character.png';
import CharacterCardInterface from '../interfaces/character-card.interface';
import StatusBarHorizontal from './StatusBarHorizontal';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsFillLightningFill } from 'react-icons/bs';

interface CardProps {
	characterData?: CharacterCardInterface; //create interface
	isCurrent?: boolean;
	onClick?: () => void;
}

const CharacterCard: React.FC<CardProps> = ({
	characterData,
	onClick,
	isCurrent = false
}) => {
	let cardBorder = '';
	if (!characterData) {
		if (isCurrent) cardBorder = `3px solid ${colors.brown.lightest}`;
		else cardBorder = `3px solid ${colors.brown.dark}`;
	} else {
		if (isCurrent) cardBorder = `2px solid ${colors.brown.lighter}`;
	}
	return (
		<Card
			style={{
				backgroundColor: colors.brown.darker,
				border: cardBorder,
				width: '20rem',
				height: '11rem',
				color: colors.font.primary,
				cursor: 'pointer'
			}}
			onClick={onClick}
		>
			<Card.Body>
				{characterData ? (
					<>
						<Card.Title>{characterData.name}</Card.Title>
						<div className="d-flex justify-content-between mb-2">
							<Card.Subtitle className="text-white">
								{characterData.buildName}
							</Card.Subtitle>
							<Card.Subtitle>{characterData.role}</Card.Subtitle>
						</div>
						<div style={{ marginTop: '20px' }}>
							<StatusBarHorizontal color="red" size="5px">
								<div className="d-flex justify-content-between">
									<div className="d-flex">
										<BsFillHeartFill
											color={colors.font.primary}
											style={{ marginRight: '5px' }}
											size="15px"
										/>
										<Card.Subtitle>Health</Card.Subtitle>
									</div>
									<Card.Subtitle className="text-white">
										{characterData.health} / {characterData.health}
									</Card.Subtitle>
								</div>
							</StatusBarHorizontal>
							<StatusBarHorizontal color="blue" size="5px">
								<div className="d-flex justify-content-between">
									<div className="d-flex">
										<BsFillLightningFill
											color={colors.font.primary}
											style={{ marginRight: '5px' }}
											size="15px"
										/>
										<Card.Subtitle>Mana</Card.Subtitle>
									</div>
									<Card.Subtitle className="text-white">
										{characterData.mana} / {characterData.mana}
									</Card.Subtitle>
								</div>
							</StatusBarHorizontal>
						</div>
					</>
				) : (
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
				)}
			</Card.Body>
		</Card>
	);
};

export default CharacterCard;
