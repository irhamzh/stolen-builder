import { Routes, Route, Outlet } from 'react-router-dom';
import SkillTree from '../views/Builder/SkillTree';

export function BuilderRoutes() {
  return (
    <>
      <h3>SIDEBAR BUILDER WILL BE HERE</h3>
      <Routes>
        <Route index element={<h4>Skill Tree Page</h4>} />
        <Route path="skill-tree" element={<SkillTree />} />
        <Route path="fortune" element={<h4>Fortune Page</h4>} />
        <Route path="item" element={<h4>Item Page</h4>} />
        <Route path="stat-attr" element={<h4>Stat and Attribute Page</h4>} />
        <Route
          path="*"
          element={<h4>GOING BACK TO BEFORE USING useNavigation(-1)</h4>}
        />
      </Routes>
    </>
  );
}

export default BuilderRoutes;
