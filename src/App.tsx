import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  UserProvider,
  Resume,
  Nav,
  Form,
  Home,
} from "./component/Context/Index";
import Footer from "./component/Footer.tsx";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <UserProvider>
          <header>
            <Nav />
          </header>

          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/home" element={<Home />}></Route>
            </Routes>
          </main>

          
          <footer>
            <Footer />
          </footer>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
