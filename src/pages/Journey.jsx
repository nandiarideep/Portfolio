import React from "react";
import { motion } from "framer-motion";
import Eve from '@assets/eve.webp';
import Nav from '@assets/nav.jpg';
import Ime from '@assets/ime.jpg';

const experiences = [
  {
    date: "Jun 2023 ~ Sep 2023",
    title: "Intern",
    company: "Imeet Technology, Mathura",
    logo: Ime,
    description: "Began learning JavaScript, React & front-end fundamentals.",
  },
  {
    date: "Jan 2024 ~ Feb 2024",
    title: "Systems Engineer Trainee",
    company: "Navigators Software, Kolkata",
    logo: Nav,
    description:
      "Development in Python.",
  },
  {
    date: "Sep 2024 ~ Dec 2025",
    title: "Frontend Developer",
    company: "Eve Technologies, Kolkata",
    logo: Eve,
    description:
      "Contributed to a large-scale SaaS product and improved UI/UX & scalability.",
  }
];

export default function Journey() {
  return (
    <section id="journey" className=" text-white min-h-dvh pt-20 flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

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
              <div className="bg-white/20 rounded-lg p-5 shadow-md flex flex-col sm:flex-row sm:items-center w-full hover:scale-101 transition-transform duration-300">
                {/* Company Logo */}
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <motion.img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-20 w-20 object-contain rounded-full border border-gray-700 p-1 bg-white"
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
                  <p className="text-gray-200 text-sm mb-2 font-semibold italic">{exp.company}</p>
                  <p className="mt-1 text-gray-200 leading-relaxed font-semibold">
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
