import React from 'react';
import './Achievements.css';

const achievementsData = [
  'Completed a comprehensive full-stack development bootcamp with a focus on modern technologies such as React, Node.js, and MongoDB.',
  'Developed a cloud-based application that handles over 10,000 users concurrently with zero downtime.',
  'Implemented a CI/CD pipeline to automate the testing and deployment of applications, reducing the deployment time by 50%.',
  'Contributed to an open-source project that received over 1,000 stars on GitHub.',
  'Led a team of developers to create a mobile application that achieved over 100,000 downloads in the first month.',
  'Designed and deployed a scalable RESTful API used by multiple client applications, improving data retrieval times by 40%.',
  'Received the Best Developer Award in a regional hackathon, competing against 50+ teams.',
  'Developed a machine learning model that increased prediction accuracy by 30%, aiding in data-driven decision making.',
  'Optimized database queries to enhance application performance, resulting in a 60% reduction in data retrieval time.'
];


const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="sptc">
        <h1>Achievements</h1>
        <div className="achievements">
          {achievementsData.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="number">{index + 1}.</div>
              <div className="description">
                <p>{achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
