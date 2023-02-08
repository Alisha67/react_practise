

import Header from './Header';
import './sass/main.css';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Tabledata from './Tabledata';
import Filter from './Filter';

function App() {
  return (
    <>
    <Router>
    < Header/>
    <Filter dataarr={dataarr}/>
<Tabledata />
    </Router>
    </>
  );
}

export default App;
