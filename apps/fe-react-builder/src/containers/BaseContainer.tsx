import { Outlet } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';
// Base page color will be here
// Will import bottom navbar here
// Outlet to pass character builder(?) -> USE INTERFACE

const BaseContainer = () => {
	return (
		<div>
			<div style={{ margin: '1%', paddingBottom: '5%', width: '80vw' }}>
				<Outlet context={{ character: 'empty' }} />
			</div>
			<BottomNavbar />
		</div>
	);
};

export default BaseContainer;
