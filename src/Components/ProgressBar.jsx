import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Node Js", level: 75 },
    { name: "React Js", level: 88 },
    { name: "ExpressJS", level: 70 },
    { name: "Mongo DB", level: 80 },
    { name: "C/C++", level: 60 },
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(skills.map(skill => skill.level));
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-[90%] md:w-[60%] bg-white shadow-2xl rounded-3xl p-8 space-y-8">
        <h1 className="text-center text-3xl font-bold text-gray-700">✨ Skill Progress</h1>
        
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <h2 className="text-lg font-medium text-gray-600 mb-1">{skill.name}</h2>
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-green-300 to-blue-500 text-white text-xs flex items-center justify-center rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${progress[index]}%` }}
              >
                {progress[index]}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
