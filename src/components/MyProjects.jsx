import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Laptop3D from "./Laptop3D"; // 3D laptop component
import project1 from "../assets/myproject-images/pro1.jpg";
import project2 from "../assets/myproject-images/Jobsearchportal.png";
import project3 from "../assets/myproject-images/pro2.jpg";
import project4 from "../assets/myproject-images/pro3.png";

const projects = [
  {
    title: "Resume-builder",
    description:
      "Build your resume with ease.",
    techStack: ["Next.js", "typescript", "CSS"],
    liveSite: "https://github.com/Muhammadali295/Resume-builder",
    image: project1,
  },
  {
    title: "flight-reservation-system",
    description:
      "The MERN website allows you to reserve your flight.",
    techStack: ["React", "MongoDB", "Tailwind CSS","Node.js","Express.js","mysql"],
    liveSite: "https://github.com/Muhammadali295/flight-reservation",
    image: project2,
  },
  {
    title: "ECG-Data-analysis",
    description:
      "Data preprocessing of Vectorcardiography (VCG)",
    techStack: ["python", "matplotlib", "numpy","pandas","scipy"],
    liveSite: "https://github.com/Muhammadali295/ECG-Data-analysis",
    image: project3,
  },
  {
    title: "Tire Texture Classifier",
    description:
      "This project involves training a neural network model to classify tire textures as either Normal Tire or Cracked Tire. The model is built using the Keras library and is trained on a dataset of tire texture images. The trained model is then incorporated into a simple GUI application using Tkinter for image classification.",
    techStack: ["python", "keras", "tensorflow","tkinter"],
    liveSite: "https://github.com/Muhammadali295/Tire-Texture-Classification",
    image: project4,
  },
  {
    title: "Real-Estate",
    description:
      "A platform for property buyers and sellers to interact and search properties.",
    techStack: ["HTML", "JavaScript", "CSS","React","Node.js","Express.js","mongoDB"],
    liveSite: "https://github.com/Muhammadali295/Real-Estate",
    image: project3,
  },
];

const MyProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const laptopRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: false, margin: "-50px" });
  const isCardInView = useInView(cardRef, { once: false, margin: "-50px" });
  const isLaptopInView = useInView(laptopRef, { once: false, margin: "-50px" });

  return (
    <div
      ref={sectionRef}
      className="bg-black min-h-screen text-white py-12 flex flex-col items-center relative mb-32 px-4 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-gray-900 opacity-30 blur-3xl"></div>

      {/* Title with Scroll Animation */}
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: -30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-300 uppercase tracking-wide mb-20 text-center"
      >
        My Projects
      </motion.h1>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl gap-12">
        {/* Project Details Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, x: -50 }}
          animate={isCardInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-lg bg-gray-900/90 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-xl border border-gray-800"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 transition-transform duration-300">
            {projects[currentProject].title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-3">
            {projects[currentProject].description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {projects[currentProject].techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700/80 rounded-lg text-sm hover:bg-blue-500 transition-all shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={projects[currentProject].liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline text-lg font-semibold transition-all"
            >
              Check Github
            </motion.a>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentProject(
                  (prev) => (prev - 1 + projects.length) % projects.length
                )
              }
              className="px-4 sm:px-6 py-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all"
            >
              &larr;
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentProject((prev) => (prev + 1) % projects.length)
              }
              className="px-4 sm:px-6 py-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all"
            >
              &rarr;
            </motion.button>
          </div>
        </motion.div>

        {/* 3D Laptop Container */}
        <motion.div
          ref={laptopRef}
          initial={{ opacity: 0, x: 50 }}
          animate={isLaptopInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-lg h-[250px] sm:h-[350px] md:h-[400px] flex justify-center items-center bg-gray-800/80 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition-all"
        >
          <Laptop3D
            projectImage={projects[currentProject].image}
            currentProject={currentProject}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MyProjects;
