import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "Jan 2021",
    title: "Started Coding",
    company: "Self-Learning",
    logo: "/logos/self.png", // <-- replace with your logo path
    description: "Began learning JavaScript and front-end fundamentals.",
  },
  {
    date: "Jun 2022",
    title: "Frontend Internship",
    company: "TechStart Inc.",
    logo: "/logos/techstart.png",
    description:
      "Built UI components and optimized performance for an early-stage startup.",
  },
  {
    date: "Mar 2023",
    title: "React Developer",
    company: "Company X",
    logo: "/logos/companyx.png",
    description:
      "Contributed to a large-scale SaaS product and improved developer tooling.",
  },
  {
    date: "Jul 2024",
    title: "Frontend Engineer",
    company: "Company X",
    logo: "/logos/companyx.png",
    description: "Promoted to lead front-end engineer and mentor junior devs.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="journey" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Journey
        </h2>

        <div className="relative border-l border-gray-700 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative flex items-start"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-3 top-3 w-6 h-6 rounded-full bg-cyan-400 border-4 border-gray-900" />

              {/* Card */}
              <div className="bg-gray-800 rounded-lg p-5 shadow-md flex flex-col sm:flex-row sm:items-center w-full">
                {/* Company Logo */}
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <motion.img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-14 w-14 object-contain rounded-sm border border-gray-700 p-1 bg-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Text Content */}
                <div>
                  <time className="text-sm text-cyan-300 font-semibold block">
                    {exp.date}
                  </time>
                  <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                  <p className="mt-1 text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
