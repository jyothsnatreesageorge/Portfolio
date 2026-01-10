import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaMicrochip
} from "react-icons/fa";
import { 
  SiGnubash,
  SiMongodb, 
  SiC,
  SiMysql 
} from "react-icons/si";

function Skills() {
  const languages = [
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "C", icon: <SiC className="text-gray-700" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Assembly", icon: <FaMicrochip className="text-purple-600" /> },
  { name: "Bash", icon: <SiGnubash className="text-gray-800" /> },
];

  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Programming Languages
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition"
              >
                <div className="text-5xl mb-4">{lang.icon}</div>
                <p className="font-medium">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Tech Stack & Tools
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition"
              >
                <div className="text-5xl mb-4">{tech.icon}</div>
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;