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
import MySQL from "../icons/MySQL.jsx";
import PostgreSQL from "../icons/PostgreSQL.jsx";
import MongoDB from "../icons/MongoDB.jsx";
import Git from "../icons/Git.jsx";
import Linux from "../icons/Linux.jsx";
import NodeJS from "../icons/NodeJS.jsx";
import ReactNative from "../icons/ReactNative.jsx";
import Electron from "../icons/Electron.jsx";
import { useTranslations } from '../i18n/index.js';

import React, { useState } from "react";

const Modal = ({ isOpen, onClose, skill, certificates }) => {
  if (!isOpen || !skill) return null;

  const skillCertificates = certificates[skill.name] || [];
  if (skillCertificates.length === 0) return null;

  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const currentCertificate = skillCertificates[currentCertificateIndex];

  const handlePrev = () => {
    setCurrentCertificateIndex(prevIndex => (prevIndex === 0 ? skillCertificates.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentCertificateIndex(prevIndex => (prevIndex === skillCertificates.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl max-w-2xl max-h-[90%] overflow-y-auto flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{skill.name}</h2>

        <div className="flex items-center gap-6">
          <button onClick={handlePrev} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors">
            ←
          </button>

          <div className="w-48 h-48 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <img src={currentCertificate} alt={`Certificate ${currentCertificateIndex + 1}`} className="w-full h-full object-contain" />
          </div>

          <button onClick={handleNext} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors">
            →
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          {skillCertificates.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full transition-colors ${index === currentCertificateIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SKILLS = {
  Python: { name: "Python", logo: () => <Python />, category: "ia" },
  TensorFlow: { name: "TensorFlow", logo: () => <Tensorflow />, category: "ia" },
  Keras: { name: "Keras", logo: () => <Keras />, category: "ia" },
  Pytorch: { name: "PyTorch", logo: () => <Pytorch />, category: "ia" },
  LangChain: { name: "LangChain", logo: () => <LangChain />, category: "ia" },
  scikitlearn: { name: "scikit-learn", logo: () => <SkLearn />, category: "ia" },
  SciPy: { name: "SciPy", logo: () => <SciPy />, category: "ia" },
  Pandas: { name: "Pandas", logo: () => <Pandas />, category: "ia" },
  Numpy: { name: "NumPy", logo: () => <NumPy />, category: "ia" },
  Matplotlib: { name: "Matplotlib", logo: () => <Matplotlib />, category: "ia" },
  Seaborn: { name: "Seaborn", logo: () => <Seaborn />, category: "ia" },
  AWS: { name: "AWS", logo: () => <AWS />, category: "ia" },
  HuggingFace: { name: "Hugging Face", logo: () => <HuggingFace />, category: "ia" },
  JavaScript: { name: "JavaScript", logo: () => <JavaScript />, category: "web" },
  HTML: { name: "HTML", logo: () => <HTML />, category: "web" },
  CSS: { name: "CSS", logo: () => <CSS />, category: "web" },
  React: { name: "React", logo: () => <ReactLogo />, category: "web" },
  NextJS: { name: "Next.js", logo: () => <NextJS />, category: "web" },
  Tailwind: { name: "Tailwind", logo: () => <Tailwind />, category: "web" },
  TypeScript: { name: "TypeScript", logo: () => <TypeScript />, category: "web" },
  FastAPI: { name: "FastAPI", logo: () => <FastAPI />, category: "web" },
  Astro: { name: "Astro", logo: () => <AstroLogo />, category: "web" },
  MySQL: { name: "MySQL", logo: () => <MySQL />, category: "web" },
  PostgreSQL: { name: "PostgreSQL", logo: () => <PostgreSQL />, category: "web" },
  MongoDB: { name: "MongoDB", logo: () => <MongoDB />, category: "web" },
  Git: { name: "Git", logo: () => <Git />, category: "web" },
  Linux: { name: "Linux", logo: () => <Linux />, category: "web" },
  NodeJS: { name: "Node.js", logo: () => <NodeJS />, category: "web" },
  ReactNative: { name: "React Native", logo: () => <ReactNative />, category: "web" },
  Electron: { name: "Electron", logo: () => <Electron />, category: "web" }
};

const SkillsSection = ({ lang = 'en' }) => {
  const t = useTranslations(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const certificates = {
    JavaScript: ["https://example.com/cert1.jpg", "https://example.com/cert2.jpg"],
    Python: ["./../../certificates/python1.jpg", "https://example.com/cert4.jpg"]
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="skills" className="w-full flex flex-col items-center py-20 px-6 scroll-mt-20 bg-white dark:bg-gray-950">
      <div className="w-full max-w-4xl">
        <h2 className="section-heading text-3xl sm:text-4xl text-center mb-3 text-gray-900 dark:text-white">{t.skills.sectionTitle}</h2>
        <p className="section-subheading text-center mb-10 text-gray-600 dark:text-gray-300">
          {t.skills.sectionSubtitle} <span className="text-primary">{t.skills.ai}</span> {t.skills.and} <span className="text-primary">{t.skills.webDev}</span>
        </p>
        
        <div className="space-y-8">
          <SkillsContainer title={t.skills.aiCategory}>
            {Object.entries(SKILLS).filter(([_, skill]) => skill.category === "ia").map(([name, skill]) => (
              <div
                key={skill.name}
                className="border border-gray-200 dark:border-gray-700 rounded-xl w-24 h-24 flex flex-col items-center justify-center gap-1.5 hover:border-primary/40 transition-colors duration-200 cursor-pointer p-3"
                onClick={() => handleSkillClick(skill)}
              >
                <div className="w-7 h-7 flex-shrink-0">{skill.logo()}</div>
                <p className="text-xs text-gray-700 dark:text-gray-200 text-center font-medium leading-tight">{skill.name}</p>
              </div>
            ))}
          </SkillsContainer>

          <SkillsContainer title={t.skills.webCategory}>
            {Object.entries(SKILLS).filter(([_, skill]) => skill.category === "web").map(([name, skill]) => (
              <div
                key={skill.name}
                className="border border-gray-200 dark:border-gray-700 rounded-xl w-24 h-24 flex flex-col items-center justify-center gap-1.5 hover:border-primary/40 transition-colors duration-200 cursor-pointer p-3"
                onClick={() => handleSkillClick(skill)}
              >
                <div className="w-7 h-7 flex-shrink-0">{skill.logo()}</div>
                <p className="text-xs text-gray-700 dark:text-gray-200 text-center font-medium leading-tight">{skill.name}</p>
              </div>
            ))}
          </SkillsContainer>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        skill={selectedSkill}
        certificates={certificates}
      />
    </section>
  );
};

export default SkillsSection;
