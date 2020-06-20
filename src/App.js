import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Component/Navbar';
import Footer from './Component/Footer';
import HomeLanding from './Pages/HomeLanding';
import AboutUs from './Pages/AboutUs';
import ActivationPage from './Pages/ActivationPage';
import ResetPassword from './Pages/ResetPassword';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import './Assets/Css/Style.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path={"/"} component={HomeLanding} />
        <Route path={"/about-us"} component={AboutUs} />
        <Route path={"/privacy-policy"} component={PrivacyPolicy} />
        <Route exact path={"/auth/confirm/:uidtoken/:hashtoken"} component={ActivationPage} />
        <Route exact path={"/auth/resetpassword/:uidtoken/:email/:hashtoken"} component={ResetPassword} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
