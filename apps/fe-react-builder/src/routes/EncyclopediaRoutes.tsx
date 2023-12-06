import { Routes, Route } from 'react-router-dom';

export function EncyclopediaRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<h4>Encyclopedia Page</h4>} />
      </Routes>
    </>
  );
}

export default EncyclopediaRoutes;
