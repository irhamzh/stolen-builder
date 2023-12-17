import { Col, Container, Row } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';
import CharacterSelection from '../components/CharacterSelection';
import colors from '../components/colors';
import { useState } from 'react';
import CharacterRole from '../enums/character-role.enums';
import CharacterCardInterface from '../interfaces/character-card.interface';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const tempCharacterData: CharacterCardInterface[] = [
		{
			id: 1,
			name: 'Artemis',
			role: CharacterRole.Rogue,
			buildName: 'One Punch Man',
			health: 2137,
			mana: 2134
		},
		{
			id: 2,
			name: 'Blue',
			role: CharacterRole.Fighter,
			buildName: 'Wolverine',
			health: 40095,
			mana: 1632
		},
		{
			id: 3,
			name: 'Tom',
			role: CharacterRole.Paladin,
			buildName: 'White Mage',
			health: 5254,
			mana: 2158
		},
		{
			id: 4,
			name: 'Reese',
			role: CharacterRole.Warlock,
			buildName: 'Immortal Summoner Exploder',
			health: 20053,
			mana: 2380
		}
		// {
		// id: 5,
		// 	name: 'Inheritor',
		// 	role: CharacterRole.Ranger,
		// 	buildName: 'Failed Archer',
		// 	health: 1816,
		// 	mana: 1792
		// }
		// {
		// id: 6,
		// 	name: 'Bree',
		// 	role: CharacterRole.Rogue,
		// 	buildName: 'The Forgotten One',
		// 	health: 2227,
		// 	mana: 2030
		// }
	];
	const navigate = useNavigate();
	const [isSelected, setIsSelected] = useState(0);

	function onCreateNewCharacter() {
		navigate('/builder');
	}

	function onAcceptCharacter() {
		console.log('accepting');
	}

	function onRemoveCharacter() {
		console.log('removing');
	}

	return (
		<Container className="justify-content-md-center">
			<Row className="my-4" style={{ textAlign: 'center' }}>
				<h1>STOLEN BUILDER</h1>
				<h5 style={{ color: colors.font.primary }}>
					Stolen Realm build planner and calculator
				</h5>
				<h5 style={{ color: colors.font.primary }}>
					TODO: Create Edit (Green), Delete (Red), Calc (Yellow) Button
				</h5>
			</Row>
			<Row>
				<CharacterSelection
					title="Available Characters"
					onAccept={onAcceptCharacter}
					onRemove={onRemoveCharacter}
					onCreateNew={onCreateNewCharacter}
				>
					{tempCharacterData?.map((character, index) => (
						<Col className="my-2 justify-content-md-center d-flex">
							<CharacterCard
								characterData={character}
								onClick={() => setIsSelected(index)}
								isCurrent={index === isSelected}
							/>
						</Col>
					))}
				</CharacterSelection>
			</Row>
		</Container>
	);
};

export default HomePage;
