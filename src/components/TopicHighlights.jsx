import React from 'react';
import './TopicHighlights.css'; // Import CSS for styling

const TopicHighlights = () => {
  const topics = [
    {
      title: 'VISION 2030 - Emergence of the Kingdom as a Global Financial Leader',
      icon: '🌍',
    },
    {
      title: 'Digital Transformation - Achieving Business Agility',
      icon: '🔄',
    },
    {
      title: 'The Future of Digital Payments',
      icon: '💳',
    },
    {
      title: 'Experiential Banking in Metaverse',
      icon: '🪐',
    },
  ];

  return (
    <section className="container my-5 timeline-section">
      <h2 className="timeline-title">Topic Highlights</h2>
      <div className="timeline">
        {topics.map((topic, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{topic.icon}</div>
            <div className="timeline-content">
              <h3>{topic.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicHighlights;
