import hero from '../assets/face.jpg';
import CircularText from '../utils/CircularText';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer with 1+ years of experience @{" "}
            <a
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse font-bold"
              href="https://www.eve24hrs.com/"
              target="_blank"
              rel="noreferrer"
            >
              EVE Technologies
            </a>{" "}
            creating digital solutions that make a difference. I love turning
            complex problems into simple, beautiful designs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image inside CircularText */}
          <div className="lg:order-2 flex justify-center">
            <CircularText
              text="FRONTEND*DEVELOPER*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class relative w-72 sm:w-80 md:w-96 flex items-center justify-center"
            >
              <img
                src={hero}
                alt="Arideep Nandi - Frontend Developer"
                className="relative w-48 sm:w-60 md:w-72 aspect-square object-cover rounded-full shadow-2xl border border-gray-700/50 z-20"
              />
            </CircularText>
          </div>

          {/* Text */}
          <div className="space-y-6 lg:order-1 text-center lg:text-left">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              My journey in web development started during college when I built
              my first website. Since then, I've been continuously learning and
              adapting to new technologies, always striving to create better
              user experiences.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I specialize in React, Node.js, and modern web technologies. When
              I'm not coding, you can find me exploring new design trends,
              contributing to open source projects, or mentoring aspiring
              developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
