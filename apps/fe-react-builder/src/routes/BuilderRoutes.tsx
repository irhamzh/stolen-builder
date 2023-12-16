import { Routes, Route, useSearchParams } from 'react-router-dom';
import SkillTree from '../views/Builder/SkillTree';
import SidebarNav from '../components/SideBarNav';
import { Col,Row,Container } from 'react-bootstrap';
import Fortune from '../views/Builder/Fortune';
import ItemPage from '../views/Builder/ItemPage';
import StatAndAttribute from '../views/Builder/StatAndAttribute';
import Summary from '../views/Builder/Summary';

export function BuilderRoutes() {

	return (
		<>
		<Container style={{ marginLeft:"1rem"}}>
			<Row>
				<Col className='col-3 px-0' style={{paddingTop: "10%", paddingBottom:"10%"}}>
					<SidebarNav/>
				</Col>
				<Col style={{paddingTop:"90px"}}>
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
