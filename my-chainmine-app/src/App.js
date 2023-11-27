import './App.css';
import Header from './Header/Header';
import Signup from'./Signup/Signup';
import Login from './Login page/Login';
import Forgot from './FORGOT PAGE/Forgot';
import FirstPage from './FirstPage/FirstPage'
import Homepage from './Homepage/Homepage'
import Pricing from './Pricing/Pricing'
import Affiliate from './Affiliate page/Affiliate';
import Insights from './Insights page/Insights';
import About from './AboutPage/About';
import Footer from './Footer/Footer'
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Faqs from './FAQS/Faqs'
import Terms from './Terms/Terms'
import { useState } from 'react';



function App() {
  const [showfooter, setShowfooter] = useState(true);
  const handleFooterVisibility = () => {
    setShowfooter(false);
  }
  const handleFooterVisibility1 = () => {
    setShowfooter(true);
  }
  
  return (
  <BrowserRouter>
    <Header handleFooterVisibility1={handleFooterVisibility1}/>
    <Routes>
      <Route element={<Signup handleFooterVisibility={handleFooterVisibility}/>} path='/Signup'/>
      <Route element={<Login handleFooterVisibility={handleFooterVisibility}/>} path='/Login' />
      <Route element={<FirstPage/>} path='/'/>
      <Route element={<Pricing/>} path='/Pricing'/>
      <Route element={<Forgot/>} path='/Forgot' />
      <Route element={<Homepage/>} path='/Homepage'/>
      <Route element={<Terms/>} path='/Terms'/>
      <Route element={<Faqs/>} path='/Faqs'/>
      <Route element={<Affiliate/>} path='/Affiliate'/>
      <Route element={<Insights/>} path='/Insights'/>
      <Route element={<About/>} path='/About'/>
    </Routes>
    {showfooter && <Footer/>}
    </BrowserRouter>
  
  )
}

export default App;
