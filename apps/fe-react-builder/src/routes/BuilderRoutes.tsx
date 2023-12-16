import { Routes, Route, useSearchParams } from 'react-router-dom';
import SkillTree from '../views/Builder/SkillTree';
import Fortune from '../views/Builder/Fortune';
import ItemPage from '../views/Builder/ItemPage';
import StatAndAttribute from '../views/Builder/StatAndAttribute';
import SidebarNav from '../components/SideBarNav';
import Summary from '../views/Builder/Summary';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function BuilderRoutes() {

	return (
		<>
		<Container>
			<Row>
				<Col className='col-3'>
					<SidebarNav/>
				</Col>
				<Col>
					<Routes>
						<Route index element={<SkillTree />} />
						<Route path="fortune" element={<Fortune/>} />
						<Route path="item" element={<ItemPage/>} />
						<Route path="stat-attr" element={<StatAndAttribute/>} />
						<Route path="summary" element={<Summary/>} />
						<Route
							path="*"
							element={<h4>GOING BACK TO BEFORE USING useNavigation(-1)</h4>}
						/>
					</Routes>
				</Col>
			</Row>
		</Container>

		</>
	);
}

export default BuilderRoutes;
