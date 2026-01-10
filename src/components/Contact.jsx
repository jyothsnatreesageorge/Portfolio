import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:jyothsnatreesagrg@gmail.com",
      color: "bg-red-500", // Gmail red
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "linkedin.com/in/jyothsna-treesa-george-",
      color: "bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/jyothsnatreesageorge",
      color: "bg-gray-800",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_j_o_0_3_",
      color: "bg-pink-500",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.com/users/jyothsnatreesageorge",
      color: "bg-indigo-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

        <div className="flex justify-center flex-wrap gap-6">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center w-20 h-20 rounded-full text-white text-2xl shadow-lg transform hover:scale-110 hover:shadow-2xl transition ${contact.color}`}
              title={contact.name}
            >
              {contact.icon}
              <span className="text-xs mt-1">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
