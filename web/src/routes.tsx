import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Contatos from './Pages/Contatos';

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/contato"
        element={<Contatos />}
      />
    </Routes>
  )
}

export default MainRoutes;