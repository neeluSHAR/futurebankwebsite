import React from 'react';
import './WhyAttend.css'; // Import custom styles

const WhyAttend = () => (
  <section className="container my-5">
    <h2 className="section-title">Why Attend?</h2>
    <p className="description-text">
      The 4th Annual Future Banks Summit KSA 2023 will highlight the enabling role of
      digitalization in reshaping the future of banking. The pandemic has forced digital
      acceleration at such a massive scale that banks are not just looking to transform but are
      forced to reimagine their business. Delegates will experience a power-packed agenda
      consisting of presentations, panel discussions, and keynotes from globally and regionally
      renowned speakers, panelists, and moderators.
    </p>
    <div className="benefit-box">
      <ul className="benefit-list">
        <li>Gain knowledge and insights from top industry leaders and experts from across the globe.</li>
        <li>Network with industry peers in a solution-oriented environment.</li>
        <li>Discuss significant partnerships and collaborations with industry leaders.</li>
      </ul>
    </div>
  </section>
);

export default WhyAttend;
