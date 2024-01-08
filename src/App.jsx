
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllData from './Components/AllData';

import Footer from './Components/Footer';
import Header from './Components/Header';
import DetailsDoc from './Components/DetailsDoc';






function App() {
  return (
   
    <div className="App">


      <header>
        <Header />
      </header>


      <section>
        <Routes>
          <Route path='/' element={<AllData/>}/>
          <Route path='/view/:id' element={<DetailsDoc/>}/>
        </Routes>
      </section>


      <footer>
        <Footer/>
      </footer>
      
  
    </div>
  );
}

export default App;
