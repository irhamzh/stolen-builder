import { Outlet, useLocation } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';
// Base page color will be here
// Will import bottom navbar here
// Outlet to pass character builder(?) -> USE INTERFACE

const BaseContainer = () => {
	const location = useLocation();
	return (
		<div>
			<div style={{ margin: '1%', paddingBottom: '5%' }}>
				<Outlet context={{ character: 'empty' }} />
			</div>
			<BottomNavbar currentPath={location.pathname} />
		</div>
	);
};

export default BaseContainer;
