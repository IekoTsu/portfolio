import './App.css';
import './CSS/components.css'
import { Route , Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Conatct from './pages/Contact';
import LegalNotices from './pages/LegalNotices';
import GitProfile from './pages/GitProfile';

function App() {
  return (
    <div className="App d-flex flex-column vh-100 justify-content-between ">
      <Header/>
      <Routes>
        <Route path='/' element = { <Home/> }/>
        <Route path='/services' element = { <Services/> }/>
        <Route path='/achievements' element = { <Achievements/> }/>
        <Route path='/blog' element = { <Blog/> }/>
        <Route path='/contact' element = { <Conatct/> }/>
        <Route path='/legal-notices' element = { <LegalNotices/> }/>
        <Route path='/github-profile' element = { <GitProfile/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
