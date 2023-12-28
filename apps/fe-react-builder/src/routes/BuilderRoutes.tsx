import { Routes, Route, useSearchParams } from 'react-router-dom';
import SkillTree from '../views/Builder/SkillTree';
import SidebarNav from '../components/SideBarNav';
import { Col,Row,Container } from 'react-bootstrap';
import Fortune from '../views/Builder/Fortune';
import ItemPage from '../views/Builder/ItemPage';
import StatAndAttribute from '../views/Builder/StatAndAttribute';
import Summary from '../views/Builder/Summary';
import { useState } from 'react';

export function BuilderRoutes() {

	const [charSelected,setCharSelected ] = useState(true) // pass in the prop to the sidebar if a char is selected or not

	return (
		<Container fluid >
			<Row>
				<Col className='col-2 px-0' style={{paddingTop: "8%", paddingBottom:"10%"}}>
					<SidebarNav
					isCharSelected= {charSelected}
					/>
				</Col>
				<Col style={{paddingTop:"90px"}}>
					<Routes>
						<Route index element={charSelected?<SkillTree />:<h4>Please Select a character first before navigating to builder</h4>} />
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
	);
}

export default BuilderRoutes;
