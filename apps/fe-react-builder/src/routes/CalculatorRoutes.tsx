import { Routes, Route } from 'react-router-dom';

export function CalculatorRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<h4>Calculator Page</h4>} />
      </Routes>
    </>
  );
}

export default CalculatorRoutes;
