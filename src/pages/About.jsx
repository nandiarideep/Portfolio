import hero from '../assets/face.jpg';
import CircularText from '../utils/CircularText';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 font-semibold max-w-3xl mx-auto">
            I'm a passionate developer with 1.6+ years of experience @{""}
            <a
              className="font-bold"
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
        <div className="relative flex items-center justify-center sm:mt-16 w-full">
          {/* Image inside CircularText */}
          <div className="relative flex items-center justify-center scale-50 sm:scale-100">
            <CircularText
              text="FRONTEND*DEVELOPER*"
              onHover="slowDown"
              spinDuration={20}
              className="custom-class"
            >
              <img
                src={hero}
                width={200}
                height={200}
                alt="Arideep Nandi - Frontend Developer"
                className="dark:invert rounded-full object-cover hover:scale-102 transition-transform"
              />
            </CircularText>
          </div>

          {/* Text */}
          <div className="space-y-6 lg:order-1 text-center lg:text-left">
            <p className="text-gray-900 font-semibold text-base sm:text-lg leading-relaxed">
              My journey in web development started during college when I built
              my first website. Since then, I've been continuously learning and
              adapting to new technologies, always striving to create better
              user experiences.
            </p>
            <p className="text-gray-900 font-semibold text-base sm:text-lg leading-relaxed">
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
