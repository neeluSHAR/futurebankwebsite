import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import WhoWillYouMeet from './components/WhoWillYouMeet';
import TopicHighlights from './components/TopicHighlights';
import WhyAttend from './components/WhyAttend';
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
<Route path="/who-will-you-meet" element={<WhoWillYouMeet />} />
<Route path="/topic-highlights" element={<TopicHighlights />} />
<Route path="/why-attend" element={<WhyAttend />} />
<Route path="/contact-us" element={<ContactUs />} />
*/}

      </Routes>
    </main>
  </Router>
);

export default App;
