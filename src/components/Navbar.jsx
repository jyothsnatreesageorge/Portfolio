import profileImg from "../assets/profile.jpg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Name + Profile Image */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-gray-900">Jyothsna Treesa George</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-indigo-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600 transition">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-600 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-indigo-600 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
