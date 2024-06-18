const Skill = ({ percentage, skillName }) => {
  const radius = 72.5;
  const circumference = 2 * Math.PI * radius;
  const offset = ((100 - percentage) / 100) * circumference;

  return (
    <div className="skill_element">
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div id="number">{percentage}%</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#0072ff" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r={radius}
            strokeLinecap="round"
            stroke="url(#GradientColor)"
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            fill="none"
          />
        </svg>
      </div>
      <h3>{skillName}</h3>
    </div>
  );
};

export default Skill;
