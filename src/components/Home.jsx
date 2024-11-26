import React from 'react';
import './Home.css';
import WhoWillYouMeet from './WhoWillYouMeet';
import WhyAttend from './WhyAttend';
import TopicHighlights from './TopicHighlights';
import ContactUs from './ContactUs';
import eventImage from '../images/event.jpg';

// Use the imported image
<img src={eventImage} alt="Event Overview" className="event-image" />


const Home = () => (
  <div className="home-section">
    {/* Hero Section */}
    <div className="hero-section">
      <h1 className="hero-title">Welcome to Future Banks Summit KSA 2023</h1>
      <p className="hero-description">
        Discover the future of banking with industry leaders.
      </p>
      <button className="btn-gradient">Register Now</button>
    </div>

    {/* Event Overview Section */}
    <section className="event-overview">
      <div className="content-with-image">
        <div className="text-content">
          <h2 className="section-title">Event Overview</h2>
          <p>
            The banking industry worldwide is undergoing phenomenal change, giving the banks an
            opportunity to relook into their existing business models and take a huge leap towards the
            future. The shift in consumers' digital experience, adoption of next-gen technologies,
            transformation of customer service to customer engagement, and the mobile workforce with a
            need to 'right-size' the branch network are all opportunities for regional banks to seize and
            accelerate the shift to digital.
          </p>
          <p>
            The 4th Annual Future Banks Summit KSA 2023 will showcase the latest innovations and practical
            case studies, along with interactive panel discussions designed to guide the banking sector in
            KSA in identifying the right strategies to overcome long-standing resistance and be future-ready!
          </p>
          <p>
            An exciting and timely conference is on its way, discussing the future of the financial industry in KSA
            driven by innovation and digital advancements, with the adoption of technologies such as AI, digital
            transformation, digital banking, banking in the metaverse, intelligent automation, regtech, data
            analytics, cloud migration, cyber security, digital payment models, along with tech-driven redefined
            business continuity planning strategies.
          </p>
        </div>
        <img
          src={require('../images/event.jpg')}
          alt="Event Overview"
          className="event-image"
        />
      </div>
    </section>

    {/* Other Sections */}
    <section className="why-attend">
     
      <WhyAttend />
    </section>

    <section className="who-will-you-meet">
    
      <WhoWillYouMeet />
    </section>

    <section className="topic-highlights">
      
      <TopicHighlights />
    </section>

    <footer className="contact-us">
      
      <ContactUs />
    </footer>
  </div>
);

export default Home;
