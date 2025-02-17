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
  return (
    <section id="skills" className="bg-white w-full h-auto flex flex-col items-center pt-8 text-primary mr-6 z-10">
      <h1 className="pt-8 pb-6 text-4xl font-bold z-10">Skills</h1>
      <div className="w-full max-w-3xl flex flex-col flex-wrap justify-center z-10 text-pretty">
      <SkillsContainer title="Data and Machine Learning">
          {Object.entries(SKILLS).filter(([_, skill]) => skill.category === "ia").map(([name, skill]) => (
            <div key={skill.name} className="bg-none size-24 flex flex-col gap-2 p-2 rounded-lg justify-center items-center transition-transform duration-100 ease-in-out hover:scale-125 cursor-pointer">
              <div className="size-8">{skill.logo()}</div>
              <p className="text-xs text-pretty text-black text-center font-light">{skill.name}</p>
            </div>
          ))}
        </SkillsContainer>
      <SkillsContainer title="Software Development">
          {Object.entries(SKILLS).filter(([_, skill]) => skill.category === "web").map(([name, skill]) => (
            <div key={skill.name} className="bg-none size-24 flex flex-col gap-2 p-2 rounded-lg justify-center items-center transition-transform duration-100 ease-in-out hover:scale-125 cursor-pointer">
              <div className="size-8">{skill.logo()}</div>
              <p className="text-xs text-pretty text-black text-center font-light">{skill.name}</p>
            </div>
          ))}
        </SkillsContainer>
      </div>
    </section>
  );
};

export default SkillsSection;
