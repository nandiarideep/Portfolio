import logo from '@assets/logo.jpeg';
import CircularText from '@utils/CircularText';

const About = () => {
  return (
    <section id="about" className="min-h-dvh flex items-center justify-center mt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center text-white">
          <p className="text-lg sm:text-xl text-white font-semibold max-w-3xl mx-auto">
            Passionate software developer with 2+ years of experience in Frontend Development specializing in building user-centric digital solutions. Adept at translating complex business requirements into clean, intuitive, and visually engaging interfaces using modern web technologies. Driven by clean code, scalability, and impactful problem-solving.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 mt-16">
          {/* Image inside CircularText */}
          <div className="relative flex items-center justify-center">
            <img
              src={logo}
              alt="Arideep Nandi - Frontend Developer"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover absolute"
            />
            <CircularText
              text="FRONTEND*DEVELOPER*"
              onHover="slowDown"
              spinDuration={20}
              className="absolute inset-0 m-0 mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-center lg:text-left lg:flex-1">
            <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
              My journey in web development began during college, where I built my first website and discovered a passion for creating things on the web. Since then, I have continuously evolved by learning new technologies, adapting to industry trends, and consistently striving to deliver seamless and engaging user experiences.
            </p>
            <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
              I specialize in React, Node.js, and modern web technologies, focusing on building scalable and maintainable applications. Beyond coding, I actively explore emerging design trends, contribute to open-source projects, and mentor aspiring developers to help them grow in their tech journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
