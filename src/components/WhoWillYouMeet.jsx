import React from 'react';
import './WhoWillYouMeet.css'; // Add a CSS file for styling

const WhoWillYouMeet = () => {
  const roles = [
    { name: 'CIOs, CTOs, Heads of Technology', color: '#FF6F61', icon: '💻' },
    { name: 'Chief Digital Officers, Digital Transformation', color: '#6EB5FF', icon: '🔄' },
    { name: 'Heads of Retail Banking', color: '#FFD166', icon: '🏦' },
    { name: 'Heads of Corporate Banking', color: '#A1E9C5', icon: '📈' },
    { name: 'Heads of Customer Experience', color: '#A1D5E9', icon: '🌟' },
    { name: 'Heads of Cards & Payments', color: '#CBA6E9', icon: '💳' },
    { name: 'Heads of Governance & Compliance', color: '#9DD6D3', icon: '⚖️' },
  ];

  return (
    <section className="container my-5">
      <h2 className="title">Who Will You Meet?</h2>
      <div className="role-list">
        {roles.map((role, index) => (
          <div
            key={index}
            className="role-item"
            style={{ backgroundColor: role.color }}
          >
            <span className="icon">{role.icon}</span>
            <span className="name">{role.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWillYouMeet;
