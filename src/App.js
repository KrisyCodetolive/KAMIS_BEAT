import { Acceuil } from './bodyPage/Acceuil';
import Nav_Bar from './component/Nav-bar';
import Footer from './component/Footer';
import './File_css/app.css';

function App() {
  return (
    <div className='App'>
      <Nav_Bar/>

      <Acceuil/>

      <Footer/>
    </div>
  );
}

export default App;
