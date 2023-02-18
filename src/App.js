import './App.css';
import {Routes, Route} from 'react-router-dom'
import Accueil from './components/Accueil'
import Reserve from './components/Reserve'
import Para from './components/Para'
import Scan from './components/Scan'
import Pharmacies from './components/Pharmacies'
import Inscription from './components/Inscription'
import Connexion from './components/Connexion'
import Panier from './components/panier';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Accueil/>} />
        <Route  path="/Reserve" element={<Reserve/>} />
        <Route  path="/Para" element={<Para/>} />
        <Route  path="/panier" element={<Panier/>} />
        <Route path="/Scan" element={<Scan />} />
        <Route path="/Pharmacies" element={<Pharmacies />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
