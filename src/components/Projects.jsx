import rageRollImg from "../assets/rageroll.png";
import moodeshImg from "../assets/moodesh.png";
import wackywebImg from "../assets/wackyweb.jpg";
import examImg from "../assets/exam.jpg";
import formImg from "../assets/form.png";
function Projects() {
  const projects = [
    {
      title: "Rage Roll",
      description: "A fun web based game created using HTML,CSS and JS",
      image: rageRollImg, 
      link: "https://dhjr.github.io/Useless_project/",
    },
    {
      title: "Moodesh",
      description: "A web app built using HTML,CSS and JS that suggests some activities to the user based on their emotion",
      image: moodeshImg,
      link: "https://nazmin-babubaker.github.io/Moodesh/",
    },
    {
      title: "Wacky Web",
      description: "A fun web app built using HTML,CSS and JS that has some unpredictable turns",
      image: wackywebImg,
      link: "https://deviparvathy-23.github.io/Useless_project_2.0/",
    },
    {
      title: "Exam Management System",
      description: "An online exam management system built as a microproject as a part of DBMS course",
      image: examImg,
      link: "https://github.com/jyothsnatreesageorge/EXAM_MANAGEMENT_SYSTEM",
    },
    {
      title: "Registration Form",
      description: "A simple registration form built as a part of Full stack web development course",
      image: formImg,
      link: "https://jyothsnatreesageorge.github.io/Registration-Form/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
