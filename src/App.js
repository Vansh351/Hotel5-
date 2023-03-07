import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './Component/Header.jsx'
import Home from './Component/Home.jsx'


function App() {
  return <Router>
     <Header/>
     <Routes>
         <Route path="/"  element={<Home/>} />
         <Route path="/rooms" element={<h3> Rooms </h3>} />
         <Route path={'/location'} element={<h3> Location </h3>} />
         <Route path={'/dinning'} element={<h3> Dinning </h3>} />
         <Route path={'/gallery'} element={<h3>Gallery </h3>} />
         <Route path={'/service'} element={<h3>Service and Facility </h3>} />
         <Route path={'/contact'} element={<h3>Contact</h3>} />
     </Routes>
  </Router>
}

export default App;
