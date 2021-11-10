import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Dealers from './components/Dealers';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
