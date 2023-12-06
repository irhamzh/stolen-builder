import HelloComponent from './components/HelloComponent';
import BaseContainer from './containers/BaseContainer';
import BuilderRoutes from './routes/BuilderRoutes';
import CalculatorRoutes from './routes/CalculatorRoutes';
import EncyclopediaRoutes from './routes/EncyclopediaRoutes';
import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import Page404 from './views/Page404';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseContainer />}>
        <Route index element={<HelloComponent word="Home" />} />
        <Route path="/builder/*" element={<BuilderRoutes />} />
        <Route path="/encyclopedia/*" element={<EncyclopediaRoutes />} />
        <Route path="/calculator/*" element={<CalculatorRoutes />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
