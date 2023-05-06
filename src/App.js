import './App.css';
import Create from './component/create';
import Read from './component/read';
import Update from './component/update';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

     <h1>react_js crud operation </h1>
     
  <BrowserRouter>
  
  <Routes>

   <Route path='/create' element={<Create/>}  />

   <Route path='/read' element={<Read/>}  />

   <Route path='/update' element={<Update/>}  />

  </Routes>
  
  
  </BrowserRouter>
    
    
    
    
    

  
     
    </div>
  );
}

export default App;
