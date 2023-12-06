import { Outlet } from 'react-router-dom';
// Base page color will be here
// Will import bottom navbar here
// Outlet to pass character builder(?) -> USE INTERFACE

const BaseContainer = () => {
  return (
    <>
      <h4>THIS IS BASE CONTAINER</h4>
      <Outlet context={{ character: 'empty' }} />
      <h4>Navbar Will be here</h4>
    </>
  );
};

export default BaseContainer;
