import { Outlet } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';
// Base page color will be here
// Will import bottom navbar here
// Outlet to pass character builder(?) -> USE INTERFACE

const BaseContainer = () => {
	return (
		<div>
<<<<<<< HEAD
			<div style={{ margin: '1%', paddingBottom: '5%', width: '80vw' }}>
=======
			<div style={{ margin: '1%', paddingBottom: '10%' }}>
>>>>>>> a0e713f69919d7f0fc4df5340cc803c2f0abf554
				<Outlet context={{ character: 'empty' }} />
			</div>
			<BottomNavbar />
		</div>
	);
};

export default BaseContainer;
