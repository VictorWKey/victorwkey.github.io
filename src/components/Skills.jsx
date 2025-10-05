import SkillsContainer from "./SkillsContainer.jsx";
import JavaScript from "../icons/JavaScript.jsx";
import HTML from "../icons/HTML.jsx";
import CSS from "../icons/CSS.jsx";
import ReactLogo from "../icons/ReactLogo.jsx";
import NextJS from "../icons/NextJS.jsx";
import AstroLogo from "../icons/AstroLogo.jsx";
import Tailwind from "../icons/Tailwind.jsx";
import TypeScript from "../icons/TypeScript.jsx";
import FastAPI from "../icons/FastAPI.jsx";
import Python from "../icons/Python.jsx";
import ML from "../icons/ML.jsx";
import Tensorflow from "../icons/Tensorflow.jsx";
import Pytorch from "../icons/Pytorch.jsx";
import LangChain from "../icons/LangChain.jsx";
import Keras from "../icons/Keras.jsx";
import AWS from "../icons/AWS.jsx";
import HuggingFace from "../icons/HuggingFace.jsx";
import SkLearn from "../icons/SkLearn.jsx";
import SciPy from "../icons/SciPy.jsx";
import Pandas from "../icons/Pandas.jsx";
import NumPy from "../icons/NumPy.jsx";
import Matplotlib from "../icons/Matplotlib.jsx";
import Seaborn from "../icons/Seaborn.jsx";
import Algebra from "../icons/Algebra.jsx";
import Statistics from "../icons/Statistics.jsx";
import Probability from "../icons/Probability.jsx";
import Calculus from "../icons/Calculus.jsx";
import ExploratoryData from "../icons/ExploratoryData.jsx";
import TreatmentMissing from "../icons/TreatmentMissing.jsx";
import MySQL from "../icons/MySQL.jsx";
import PostgreSQL from "../icons/PostgreSQL.jsx";
import MongoDB from "../icons/MongoDB.jsx";
import Git from "../icons/Git.jsx";
import Linux from "../icons/Linux.jsx";
import Anaconda from "../icons/Anaconda.jsx";
import NPM from "../icons/NPM.jsx";
import VSC from "../icons/VSC.jsx";
import Markdown from "../icons/Markdown.jsx";

import React, { useState } from "react";

const Modal = ({ isOpen, onClose, skill, certificates, onCertificateChange }) => {
  if (!isOpen) return null;

  // Asegurémonos de que hay certificados disponibles
  const skillCertificates = certificates[skill.name] || [];
  
  if (skillCertificates.length === 0) return null; // Si no hay certificados, no mostramos el modal

  // Índice del certificado actual
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  const currentCertificate = skillCertificates[currentCertificateIndex];

  // Funciones para navegar entre los certificados
  const handlePrev = () => {
    setCurrentCertificateIndex(prevIndex => (prevIndex === 0 ? skillCertificates.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentCertificateIndex(prevIndex => (prevIndex === skillCertificates.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-2xl max-h-[90%] overflow-y-auto flex flex-col items-center">
        
        {/* Botón de Cerrar (X) en la esquina superior derecha */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-white hover:text-primary transition-colors duration-200"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6 text-white text-center">{skill.name}</h2>

        {/* Flechas de navegación */}
        <div className="flex items-center gap-6">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
          >
            ←
          </button>

          <div className="w-48 h-48 bg-white/10 rounded-xl overflow-hidden">
            <img 
              src={currentCertificate}
              alt={`Certificado ${currentCertificateIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
          >
            →
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          {skillCertificates.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentCertificateIndex ? 'bg-primary' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};






const SKILLS = {
  JavaScript: { name: "JavaScript", logo: () => <JavaScript />, category: "web" },
  HTML: { name: "HTML", logo: () => <HTML />, category: "web" },
  CSS: { name: "CSS", logo: () => <CSS />, category: "web" },
  React: { name: "React", logo: () => <ReactLogo />, category: "web" },
  NextJS: { name: "Next.js", logo: () => <NextJS />, category: "web" },
  Tailwind: { name: "Tailwind", logo: () => <Tailwind />, category: "web" },
  TypeScript: { name: "TypeScript", logo: () => <TypeScript />, category: "web" },
  FastAPI: { name: "FastAPI", logo: () => <FastAPI />, category: "web" },
  Astro: { name: "Astro", logo: () => <AstroLogo />, category: "web" },
  Python: { name: "Python", logo: () => <Python />, category: "ia" },
  TensorFlow: { name: "TensorFlow", logo: () => <Tensorflow />, category: "ia" },
  Keras: { name: "Keras", logo: () => <Keras />, category: "ia" },
  Pytorch: { name: "Pytorch", logo: () => <Pytorch />, category: "ia" },
  LangChain: { name: "LangChain", logo: () => <LangChain />, category: "ia" },
  scikitlearn: { name: "scikit-learn", logo: () => <SkLearn />, category: "ia" },
  SciPy: { name: "SciPy", logo: () => <SciPy />, category: "ia" },
  Pandas: { name: "Pandas", logo: () => <Pandas />, category: "ia" },
  Numpy: { name: "Numpy", logo: () => <NumPy />, category: "ia" },
  Matplotlib: { name: "Matplotlib", logo: () => <Matplotlib />, category: "ia" },
  Seaborn: { name: "Seaborn", logo: () => <Seaborn />, category: "ia" },
  MySQL: { name: "MySQL", logo: () => <MySQL />, category: "ia" },
  PostgreSQL: { name: "PostgreSQL", logo: () => <PostgreSQL />, category: "ia" },
  MongoDB: { name: "MongoDB", logo: () => <MongoDB />, category: "ia" },
  AWS: { name: "AWS", logo: () => <AWS />, category: "ia" },
  HuggingFace: { name: "HuggingFace", logo: () => <HuggingFace />, category: "ia" },
  MachineLearning: { name: "Machine Learning", logo: () => <ML />, category: "ia" },
  ExploratoryDataAnalysis: { name: "Exploratory Data Analysis", logo: () => <ExploratoryData />, category: "ia" },
  TreatmentOfMissingData: { name: "Treatment of Missing Data", logo: () => <TreatmentMissing />, category: "ia" },
  Statistics: { name: "Statistics", logo: () => <Statistics />, category: "ia" },
  Probability: { name: "Probability", logo: () => <Probability />, category: "ia" },
  Algebra: { name: "Linear Algebra", logo: () => <Algebra />, category: "ia" },
  Calculus: { name: "Calculus", logo: () => <Calculus />, category: "ia" },
  Git: { name: "Git", logo: () => <Git />, category: "web" },
  Linux: { name: "Linux", logo: () => <Linux />, category: "web" },
  Conda: { name: "Conda", logo: () => <Anaconda />, category: "web" },
  VSC: { name: "VSC", logo: () => <VSC />, category: "web" },
  Markdown: { name: "Markdown", logo: () => <Markdown />, category: "web" }
};

const SkillsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const certificates = {
    JavaScript: [
      "https://example.com/cert1.jpg",
      "https://example.com/cert2.jpg"
    ],
    Python: [
      "./../../certificates/python1.jpg",
      "https://example.com/cert4.jpg"
    ]
  };
  

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCertificateChange = (newCertificate) => {
    setCertificates((prevCertificates) => ({
      ...prevCertificates,
      [selectedSkill.name]: [...prevCertificates[selectedSkill.name], newCertificate],
    }));
  };

  return (
    <section id="skills" className="w-full h-auto flex flex-col items-center py-12 px-6 relative z-10 scroll-mt-20">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-3 pt-4">Skills</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          My expertise in <span className="text-primary">artificial intelligence</span> and <span className="text-primary">modern web development</span>
        </p>
        
        <div className="space-y-6">
          <SkillsContainer title="Data Science & Machine Learning">
            {Object.entries(SKILLS).filter(([_, skill]) => skill.category === "ia").map(([name, skill]) => (
              <div
                key={skill.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl w-28 h-28 flex flex-col items-center justify-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer group p-3"
                onClick={() => handleSkillClick(skill)}
              >
                <div className="size-8 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">{skill.logo()}</div>
                <p className="text-xs text-white text-center font-medium leading-tight overflow-hidden text-ellipsis">{skill.name}</p>
              </div>
            ))}
          </SkillsContainer>
          
          <SkillsContainer title="Software Development">
            {Object.entries(SKILLS).filter(([_, skill]) => skill.category === "web").map(([name, skill]) => (
              <div
                key={skill.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl w-28 h-28 flex flex-col items-center justify-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer group p-3"
                onClick={() => handleSkillClick(skill)}
              >
                <div className="size-8 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">{skill.logo()}</div>
                <p className="text-xs text-white text-center font-medium leading-tight overflow-hidden text-ellipsis">{skill.name}</p>
              </div>
            ))}
          </SkillsContainer>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        skill={selectedSkill}
        certificates={certificates}
        onCertificateChange={handleCertificateChange}
      />
    </section>
  );
};


export default SkillsSection;
