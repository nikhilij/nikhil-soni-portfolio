// src/components/Skills.jsx
import React from 'react';
import Skill from './Skill';

const skillsData = [
  { skillName: 'MongoDB', percentage: 90 },
  { skillName: 'JavaScript', percentage: 85 },
  { skillName: 'Python', percentage: 80 },
  { skillName: 'Java', percentage: 75 },
  { skillName: 'MySQL', percentage: 70 },
  { skillName: 'React', percentage: 95 },
  { skillName: 'Angular', percentage: 60 },
  { skillName: 'Node', percentage: 65 },
  { skillName: 'Git & GitHub', percentage: 84 },
  { skillName: 'PHP', percentage: 50 },
  { skillName: 'Django', percentage: 55 },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill_section">
        {skillsData.map((skill, index) => (
          <Skill key={index} skillName={skill.skillName} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
