import './App.css';
import Header from './Header/Header';
import Signup from'./Signup/Signup';
import Login from './Login page/Login';
import FirstPage from './FirstPage/FirstPage'
import Hompage from './Homepage/Homepage'
import Pricing from './Pricing/Pricing'
import Affiliate from './Affiliate page/Affiliate';
import Insights from './Insights page/Insights';
import About from './AboutPage/About';
import Footer from './Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Signup/>} path='/Signup'/>
      <Route element={<Login/>} path='/Login'/>
      <Route element={<FirstPage/>} path='/'/>
      <Route element={<Pricing/>} path='/Pricing'/>
    {/* <Hompage/> */}
    <Route element={<Affiliate/>} path='/Affiliate'/>
    <Route element={<Insights/>} path='/Insights'/>
    <Route element={<About/>} path='/About'/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  
  )
}

export default App;
