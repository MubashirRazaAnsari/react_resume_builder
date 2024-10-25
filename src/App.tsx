

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserProvider ,Resume ,Nav , Form } from './component/Context/Index';
function App() {
  
  
  return (
    <UserProvider>
      
  <Router >
  <Nav />
    <Routes>

    <Route path='/form' element={<Form />} />
    <Route path='/resume' element= {<Resume />} />
    </Routes>
  </Router>
    
    
    
    </UserProvider>
  )
}

export default App
