import SkillsContainer from "./SkillsContainer.jsx";
import JavaScript from "../icons/JavaScript.jsx";
import HTML from "../icons/HTML.jsx";
import CSS from "../icons/CSS.jsx";
import ReactLogo from "../icons/ReactLogo.jsx";
import AstroLogo from "../icons/AstroLogo.jsx";
import Tailwind from "../icons/Tailwind.jsx";
import TypeScript from "../icons/TypeScript.jsx";
import FastAPI from "../icons/FastAPI.jsx";
import Python from "../icons/Python.jsx";
import ML from "../icons/ML.jsx";
import Tensorflow from "../icons/Tensorflow.jsx";
import Pytorch from "../icons/Pytorch.jsx";
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
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-lg max-w-screen-sm max-h-[90%] overflow-y-auto flex flex-col items-center">
        
        {/* Botón de Cerrar (X) en la esquina superior derecha */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">{skill.name}</h2>

        {/* Flechas de navegación */}
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
          >
            &#8592; {/* Flecha izquierda */}
          </button>

          <div className="w-36 h-36">
            <img 
              src={currentCertificate} // Mostrar la imagen del certificado actual
              alt={`Certificado ${currentCertificateIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
          >
            &#8594; {/* Flecha derecha */}
          </button>
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
  Tailwind: { name: "Tailwind", logo: () => <Tailwind />, category: "web" },
  TypeScript: { name: "TypeScript", logo: () => <TypeScript />, category: "web" },
  FastAPI: { name: "FastAPI", logo: () => <FastAPI />, category: "web" },
  Astro: { name: "Astro", logo: () => <AstroLogo />, category: "web" },
  Python: { name: "Python", logo: () => <Python />, category: "ia" },
  TensorFlow: { name: "TensorFlow", logo: () => <Tensorflow />, category: "ia" },
  Pytorch: { name: "Pytorch", logo: () => <Pytorch />, category: "ia" },
  Keras: { name: "Keras", logo: () => <Keras />, category: "ia" },
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
    <section id="skills" className="bg-white w-full h-auto flex flex-col items-center pt-8 text-primary mr-6 z-10">
      <h1 className="pt-8 pb-6 text-4xl font-bold z-10">Skills</h1>
      <div className="w-full max-w-3xl flex flex-col flex-wrap justify-center z-10 text-pretty">
        <SkillsContainer title="Data and Machine Learning">
          {Object.entries(SKILLS).filter(([_, skill]) => skill.category === "ia").map(([name, skill]) => (
            <div
              key={skill.name}
              className="bg-none size-24 flex flex-col gap-2 p-2 rounded-lg justify-center items-center transition-transform duration-100 ease-in-out hover:scale-125 cursor-pointer"
              onClick={() => handleSkillClick(skill)}
            >
              <div className="size-8">{skill.logo()}</div>
              <p className="text-xs text-pretty text-black text-center font-light">{skill.name}</p>
            </div>
          ))}
        </SkillsContainer>
        <SkillsContainer title="Software Development">
          {Object.entries(SKILLS).filter(([_, skill]) => skill.category === "web").map(([name, skill]) => (
            <div
              key={skill.name}
              className="bg-none size-24 flex flex-col gap-2 p-2 rounded-lg justify-center items-center transition-transform duration-100 ease-in-out hover:scale-125 cursor-pointer"
              onClick={() => handleSkillClick(skill)}
            >
              <div className="size-8">{skill.logo()}</div>
              <p className="text-xs text-pretty text-black text-center font-light">{skill.name}</p>
            </div>
          ))}
        </SkillsContainer>
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
