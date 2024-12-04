import { DartsList} from './DartsList';
import { DartsSingle } from './DartsSingle';
import { DartsCreate} from './DartsCreate';
import { DartsDel } from './DartsDel';
import { DartsMod } from './DartsMod';
import { BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';
import './App.css';

export const App =()=> {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Sakkozók</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create-Darts">Új sakkozó</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/Darts/:DartsId" element={<DartsSingle />} />
        <Route path="/" element={<DartsList />} />
        <Route path="/create-Darts" element={<DartsCreate />} />
        <Route path="/del-Darts/:DartsId" element={<DartsDel />} />
        <Route path="/mod-Darts/:DartsId" element={<DartsMod />} />
      </Routes>
      </Router>
  );
}
