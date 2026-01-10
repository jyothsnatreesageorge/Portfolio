function Footer() {
  return (
    <footer className="bg-white py-6 text-gray-600">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Jyothsna Treesa George. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
