import './App.css';
import Header from './Header/Header';
import Signup from'./Signup/Signup';
import Login from './Login page/Login';
import Forgot from './FORGOT PAGE/Forgot';
import FirstPage from './FirstPage/FirstPage'
import Hompage from './Homepage/Homepage'
import Pricing from './Pricing/Pricing'
import Affiliate from './Affiliate page/Affiliate';
import Insights from './Insights page/Insights';
import About from './AboutPage/About';
import Footer from './Footer/Footer'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { BrowserRouter, Route, Routes } from 'react-router-dom';

=======
import Faqs from './FAQS/Faqs'
import Terms from './Terms/Terms'
>>>>>>> Stashed changes
=======
import Faqs from './FAQS/Faqs'
import Terms from './Terms/Terms'
>>>>>>> Stashed changes
=======
import Faqs from './FAQS/Faqs'
import Terms from './Terms/Terms'
>>>>>>> Stashed changes
=======
import Faqs from './FAQS/Faqs'
import Terms from './Terms/Terms'
>>>>>>> Stashed changes


function App() {

  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Signup/>} path='/Signup'/>
      <Route element={<Login/>} path='/Login'/>
      <Route element={<FirstPage/>} path='/'/>
      <Route element={<Pricing/>} path='/Pricing'/>
      <Route element={<Forgot/>} path='/Forgot' />
    {/* <Hompage/> */}
<<<<<<< Updated upstream
    <Route element={<Affiliate/>} path='/Affiliate'/>
    <Route element={<Insights/>} path='/Insights'/>
    <Route element={<About/>} path='/About'/>
    </Routes>
=======
    {/* <Pricing/> */}
    {/* <Affiliate/> */}
    {/* <Insights/> */}
    {/* <About/> */}
    {/* <Faqs/> */}
    <Terms/>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    <Footer/>
    
    </BrowserRouter>
  
  )
}

export default App;
