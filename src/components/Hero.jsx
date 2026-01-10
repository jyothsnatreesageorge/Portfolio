import profileImg from "../assets/profile.jpg"; // replace with your image path

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Jyothsna Treesa George"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-6 object-cover shadow-lg border-4 border-white"
      />

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gray-900">Jyothsna Treesa George</span>
      </h2>

      <p className="text-lg md:text-xl text-gray-700 whitespace-nowrap">
        CSE Undergraduate | Aspiring Full Stack Developer | Budding Engineer
      </p>
    </section>
  );
}

export default Hero;
