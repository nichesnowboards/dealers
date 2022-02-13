import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// Layout
import Header from '@components/Header';
import Footer from '@components/Footer';
// Pages
import AboutNiche from '@pages/AboutNiche';
import Blog from '@pages/Blog';
import Dealers from '@pages/Dealers';
import OnlineDealers from '@pages/OnlineDealers';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/about" element={<AboutNiche />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/online-dealers" element={<OnlineDealers />} />
          <Route path="/" element={<Dealers />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
