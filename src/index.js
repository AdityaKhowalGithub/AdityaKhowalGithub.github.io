import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';
import Resume from './components/resume.jsx';
import Home from './components/home.jsx';
import Mainport from './components/mainport.jsx';



// ReactDOM.render(
//     <React.Fragment>
//         <Navbar />
//         <Intro />
//         <About />
//         <Portfolio />
//         <Contact />
//         <BackToTop />
//         <Preloader />
//     </React.Fragment>,
// document.getElementById('root'));
// ReactDOM.render(
//     <Router>
//       <Routes>
//         <Route exact path="/" component={Intro} />
//         <Route path="/resume" component={PDFViewer} />
//       </Routes>
//     </Router>,
//     document.getElementById('root')
// );

// const HomePage = () => (
//     <React.Fragment>
//         <Navbar />
//          <Intro />
//          <Home />
//          <About />
//          <Mainport />
//          <Portfolio />
//          <Contact />
//          <BackToTop />
//          <Preloader />
//      </React.Fragment>
//   );
// const ResumePage = () => (
//     <React.Fragment>
//       <PDFViewer />
//     </React.Fragment>
//   );
  
//   ReactDOM.render(
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/resume" element={<ResumePage />} />
//       </Routes>
//     </Router>,
//     document.getElementById('root')
//   );



const HomePage = () => (
  <>
      <Navbar />
       <Intro />
       <Home />
       <About />
       <Mainport />
       <Portfolio />
       <Contact />
       <BackToTop />
       <Preloader />
   </>
);
// const ResumePage = () => (
//   <React.Fragment>
//     <Resume />
//   </React.Fragment>
// );

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/resume" element={<Resume />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

