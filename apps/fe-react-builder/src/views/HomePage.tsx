import { Col, Container, Row } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';
import CharacterSelection from '../components/CharacterSelection';
import colors from '../components/colors';

const HomePage = () => {
	const tempCharacterData = [
		{
			name: 'Artemis',
			role: 'Assasin', //Create enum for role
			buildName: 'One Punch Man',
			health: 2137,
			mana: 2134
		},
		{
			name: 'Blue',
			role: 'Warrior',
			buildName: 'Wolverine',
			health: 40095,
			mana: 1632
		},
		{
			name: 'Tom',
			role: 'Healer',
			buildName: 'White Mage',
			health: 5254,
			mana: 2158
		},
		{
			name: 'Reese',
			role: 'Warlock',
			buildName: 'Immortal Summoner Exploder',
			health: 20053,
			mana: 2380
		},
		{
			name: 'Inheritor',
			role: 'Archer',
			buildName: 'Failed Archer',
			health: 1816,
			mana: 1792
		},
		{
			name: 'Bree',
			role: 'Assasin',
			buildName: 'The Forgotten One',
			health: 2227,
			mana: 2030
		}
	];

	return (
		<Container className="justify-content-md-center">
			<Row className="my-4" style={{ textAlign: 'center' }}>
				<h1>STOLEN BUILDER</h1>
				<h5 style={{ color: colors.font.primary }}>
					Stolen Realm build planner and calculator
				</h5>
			</Row>
			<Row>
				<CharacterSelection title="Available Characters">
					{tempCharacterData?.map((character) => (
						<Col className="my-2">
							<CharacterCard characterData={character} />
						</Col>
					))}
				</CharacterSelection>
			</Row>
		</Container>
	);
};

export default HomePage;
