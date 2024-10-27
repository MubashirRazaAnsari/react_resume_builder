

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserProvider ,Resume ,Nav , Form, Home } from './component/Context/Index';
function App() {
  
  
  return (
  <Router >
    <UserProvider>
    <Nav />
  
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/form' element={<Form />} />
    <Route path='/resume' element= {<Resume />} />
    <Route path='/home' element= {<Home />}></Route>
    {/* <Route path='' element= {}></Route>
    <Route path='' element= {}></Route>
    <Route path='' element= {}></Route>
    <Route path='' element= {}></Route>
    <Route path='' element= {}></Route>
    <Route path='' element= {}></Route>
    <Route path='' element= {}></Route> */}
    </Routes>
    </UserProvider>
  </Router>
  )
}

export default App
